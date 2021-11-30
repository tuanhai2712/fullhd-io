import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import moment from 'moment';
import { AIHistoriesTabStyled, TableStyled } from './style';
import Table from 'react-bootstrap/Table';
import Pagination from '@components/Pagination';

export default function AIHistoriesTab() {
  const dispatch = useDispatch();
  const { aiHistories } = useSelector((state: globalState) => state.aiRobot);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_AI_HISTORIES_REQUEST,
      page,
    });
  }, []);

  const changePage = (currentPage) => {
    setPage(currentPage);
    dispatch({
      type: ActionTypes.GET_AI_HISTORIES_REQUEST,
      page: currentPage,
    });
  };

  const deadlineForBot = (date_start, date_end) => {
    return `${moment(date_start).format('DD/MM/YYYY')} - ${moment(
      date_end
    ).format('DD/MM/YYYY')}`;
  };

  const renderContentAIHistories = () => {
    if (aiHistories.length) {
      return (
        <TableStyled>
          <p className="table-text-instruction">
            Scroll right to see more <span>&gt;&gt;</span>
          </p>
          <div className="table-wrapper">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>All Time</th>
                  <th>Total Of Investment</th>
                  <th>Total Profit</th>
                </tr>
              </thead>
              <tbody>
                {aiHistories.map((item, key) => {
                  const id = key + 1;
                  return (
                    <tr key={key}>
                      <td>{id}</td>
                      <td>{deadlineForBot(item.date_start, item.date_end)}</td>
                      <td>{`$ ${item.amount.$numberDecimal}`}</td>
                      <td>{`$ ${item.profit.$numberDecimal}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="pagination">
            <Pagination
              pageSize={10}
              handleChangePage={(page) => changePage(page)}
              currentPage={page}
              totalItems={aiHistories.length}
            />
          </div>
        </TableStyled>
      );
    }
    return null;
  };
  return (
    <AIHistoriesTabStyled>{renderContentAIHistories()}</AIHistoriesTabStyled>
  );
}
