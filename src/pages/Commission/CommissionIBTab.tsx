import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { CommissionIBTabStyled } from './style';
import Pagination from '@components/Pagination';
import moment from 'moment';
import TableRegular from '@components/TableRegular';
import SearchText from '@components/SearchText';

type CommissionIBTabProps = {
  active: boolean;
};
export default function CommissionIBTab({ active }: CommissionIBTabProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const { commissionIB } = useSelector(
    (state: globalState) => state.commission
  );
  const [conditions, setConditions] = useState({
    page: 1,
    pageSize: 10,
    _id: userInfo._id,
    username: '',
  });
  const { type, status } = useSelector((state: globalState) => state.fetching);
  const { page, pageSize } = conditions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (active) {
      dispatch({
        type: ActionTypes.GET_COMMISSION_IB_REQUEST,
        conditions,
      });
    }
  }, [active]);

  const changePage = (currentPage) => {
    setConditions({ ...conditions, page: currentPage });
    dispatch({
      type: ActionTypes.GET_COMMISSION_IB_REQUEST,
      conditions: { ...conditions, page: currentPage },
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setConditions({ ...conditions, username: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setConditions({ ...conditions, page: 1 });
      dispatch({
        type: ActionTypes.GET_COMMISSION_IB_REQUEST,
        conditions: {
          ...conditions,
          page: 1,
        },
      });
    }
  };
  const renderContent = () => {
    if (type === ActionTypes.GET_COMMISSION_IB_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    } else if (!status && commissionIB.items && commissionIB.items.length) {
      return commissionIB.items.map((item, key) => {
        return (
          <tr>
            <td>{pageSize * page - pageSize + key + 1}</td>
            <td>{item.user_id.username}</td>
            <td>
              <div className="ib-starting-column">
                <div className="ib-icon">IB</div>
                <span>{moment(item.createdAt).format('HH:mm DD/MM/YYYY')}</span>
              </div>
            </td>
            <td>{item.level}</td>
            <td>{`$ ${item.amount}`}</td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <th colSpan={7}>No users found</th>
      </tr>
    );
  };
  return (
    <CommissionIBTabStyled>
      <div className="col-lg-4 col-xl-4 col-md-4 pl-0">
        <SearchText
          handleChange={(e) => handleChange(e)}
          handleKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <TableRegular>
        <p className="table-text-instruction">
          Scroll right to see more <span>&gt;&gt;</span>
        </p>
        <div className="table-wrapper">
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>IB Starting</th>
                <th>F1-F10</th>
                <th>Commission IB</th>
              </tr>
            </thead>
            <tbody>{renderContent()}</tbody>
          </Table>
        </div>
        {!status && (
          <div className="pagination">
            <Pagination
              pageSize={pageSize}
              handleChangePage={(page) => changePage(page)}
              currentPage={page}
              totalItems={commissionIB.total}
            />
          </div>
        )}
      </TableRegular>
    </CommissionIBTabStyled>
  );
}
