import React, { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { TableContainerStyled } from '../style';
import Pagination from '@components/Pagination';
import WalletApi from '@services/api/WalletApi';
import moment from 'moment';
import LoadingProcess from '@components/LoadingProcess';
import { formatter } from '@utils/utils';

const HistoryWithdraw = () => {
  const [state, setState] = useState({
    withdraws: [],
    page: 1,
    count: 0,
    pageSize: 20,
    showError: false,
    loading: false
  });

  /** hide alert after 3s */
  useEffect(() => {
    if (state.showError) {
      const timer = setTimeout(
        () => setState(state => ({ ...state, showError: false })),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [state.showError]);

  /** load data Withdraw user */
  const loadDepositUser = () => {
    setState(state => ({ ...state, loading: true, withdraws: [] }));
    WalletApi.getWithdrawByUser(state.page, state.pageSize)
      .then(response => {
        if (response.data)
          setState(state => ({
            ...state,
            withdraws: response.data.items,
            count: response.data.total,
            loading: false
          }));
        else setState(state => ({ ...state, showError: true, loading: false }));
      })
      .catch(() =>
        setState(state => ({ ...state, showError: true, loading: false }))
      );
  };

  useEffect(loadDepositUser, [state.page]);

  const changePage = (currentPage: number) =>
    setState(state => ({ ...state, page: currentPage }));

  return (
    <>
      <TableContainerStyled>
        <Alert variant="danger" show={state.showError}>
          Error load data withdraw!
        </Alert>
        <p className="table-text-instruction">
          Scroll right to see more <span>&gt;&gt;</span>
        </p>
        <div className="table-wrapper">
          <Table bordered hover variant="dark">
            <thead>
              <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>To wallet address</th>
                <th style={{ textAlign: 'right' }}>Symbol</th>
              </tr>
            </thead>
            <tbody>
              {state.withdraws.length > 0 ? (
                state.withdraws.map((item: any, key) => (
                  <tr key={key}>
                    <td>{state.pageSize * (state.page - 1) + key + 1}</td>
                    <td>
                      {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                    </td>
                    <td>{`${formatter.format(item.amountUSD)}`}</td>
                    <td
                      className={`status--${
                        item.status === 1
                          ? 'confirm'
                          : item.status === 2
                          ? 'cancel'
                          : 'pending'
                      }`}
                    >
                      <span style={item.status === 2 ? { color: 'red' } : {}}>
                        {item.status === 1
                          ? 'Confirm'
                          : item.status === 2
                          ? 'Cancel'
                          : 'Pending'}
                      </span>
                    </td>
                    <td>{`${
                      item.toAddress ? item.toAddress : 'No information'
                    }`}</td>
                    <td style={{ textAlign: 'right' }}>USDT</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th colSpan={7}>No data</th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <div className="pagination">
          <Pagination
            pageSize={state.pageSize}
            handleChangePage={changePage}
            currentPage={state.page}
            totalItems={state.count}
          />
        </div>
      </TableContainerStyled>
      {state.loading ? <LoadingProcess /> : null}
    </>
  );
};

export default React.memo(HistoryWithdraw);
