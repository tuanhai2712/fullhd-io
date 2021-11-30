import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Table from 'react-bootstrap/Table';
import { TableStyled, AICommissionTabStyled } from './style';
import Pagination from '@components/Pagination';
import SearchText from '@components/SearchText';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';

export default function AICommissionTab() {
  const dispatch = useDispatch();
  const { aiCommission } = useSelector((state: globalState) => state.aiRobot);
  const [conditions, setConditions] = useState({
    page: 1,
    pageSize: 10,
    buyer: '',
  });
  const { type, status } = useSelector((state: globalState) => state.fetching);
  const { page, pageSize } = conditions;

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_AI_COMMISSION_REQUEST,
      conditions,
    });
  }, []);

  const changePage = (currentPage) => {
    setConditions({ ...conditions, page: currentPage });
    dispatch({
      type: ActionTypes.GET_AI_COMMISSION_REQUEST,
      conditions: { ...conditions, page: currentPage },
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setConditions({ ...conditions, buyer: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setConditions({ ...conditions, page: 1 });
      dispatch({
        type: ActionTypes.GET_AI_COMMISSION_REQUEST,
        conditions: {
          ...conditions,
          page: 1,
        },
      });
    }
  };

  const level = (commission) => {
    switch (commission) {
      case 30:
        return 1;
      case 15:
        return 2;
      default:
        return 3;
    }
  };

  const renderContent = () => {
    if (type === ActionTypes.GET_AI_COMMISSION_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    } else if (!status && aiCommission.length) {
      return aiCommission.map((item, key) => {
        const id = key + 1;
        return (
          <tr key={key}>
            <td>{id}</td>
            <td>{item.buyer_username}</td>
            <td>{moment(item.createdAt).format('DD/MM/YYYY hh:mm:ss')}</td>
            <td>{level(item.amount)}</td>
            <td>{item.amount}</td>
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
    <AICommissionTabStyled>
      <div className="col-lg-4 col-xl-4 col-md-4 pl-0">
        <SearchText
          handleChange={(e) => handleChange(e)}
          handleKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <TableStyled>
        <p className="table-text-instruction">
          Scroll right to see more <span>&gt;&gt;</span>
        </p>
        <div className="table-wrapper">
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>AI Starting</th>
                <th>F1-F3</th>
                <th>Commission AI</th>
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
              totalItems={aiCommission.length}
            />
          </div>
        )}
      </TableStyled>
    </AICommissionTabStyled>
  );
}
