import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { MemberListTabStyled } from './style';
import Pagination from '@components/Pagination';
import moment from 'moment';
import Icon from '@components/Icon';
import TableRegular from '@components/TableRegular';
import SearchText from '@components/SearchText';

type MemberListTabProps = {
  active: boolean;
};

export default function MemberListTab({ active }: MemberListTabProps) {
  const { memberList } = useSelector((state: globalState) => state.commission);
  const [conditions, setConditions] = useState({
    page: 1,
    pageSize: 10,
    username: '',
    is_ib: null,
  });
  const { type, status } = useSelector((state: globalState) => state.fetching);
  const { page, pageSize } = conditions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (active) {
      dispatch({
        type: ActionTypes.GET_MEMBER_LIST_REQUEST,
        conditions,
      });
    }
  }, [active]);

  const changePage = (currentPage) => {
    setConditions({ ...conditions, page: currentPage });
    dispatch({
      type: ActionTypes.GET_MEMBER_LIST_REQUEST,
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
        type: ActionTypes.GET_MEMBER_LIST_REQUEST,
        conditions: {
          ...conditions,
          page: 1,
        },
      });
    }
  };

  const renderContent = () => {
    if (type === ActionTypes.GET_MEMBER_LIST_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    } else if (!status && memberList.items && memberList.items.length) {
      return memberList.items.map((item, key) => {
        return (
          <tr key={key}>
            <td>{pageSize * page - pageSize + key + 1}</td>
            <td>
              <div className="user-name-column">
                <span>{item.username}</span>
              </div>
            </td>
            <td>{item.level}</td>
            <td>{moment(item.createdAt).format('HH:mm DD/MM/YYYY')}</td>
            <td>
              {item.is_ib ? (
                <div className="check-icon">
                  <Icon name="check" />
                </div>
              ) : (
                <div className="close-icon ">
                  <Icon name="close" />
                </div>
              )}
            </td>
            <td>{item.sponsor_id.username}</td>
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
    <MemberListTabStyled>
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
                <th>F</th>
                <th>Created at</th>
                <th>Buy IB</th>
                <th>Direct Sponsor</th>
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
              totalItems={memberList.total}
            />
          </div>
        )}
      </TableRegular>
    </MemberListTabStyled>
  );
}
