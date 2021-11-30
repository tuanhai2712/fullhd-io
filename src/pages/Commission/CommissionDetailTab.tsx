import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Pagination from '@components/Pagination';
import moment from 'moment';
import TableRegular from '@components/TableRegular';

type CommissionDetailTabProps = {
  active: boolean;
};

export default function CommissionDetailTab({
  active,
}: CommissionDetailTabProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const { commissionDetail } = useSelector(
    (state: globalState) => state.commission
  );
  const [conditions, setConditions] = useState({
    page: 1,
    pageSize: 10,
    _id: userInfo._id,
  });
  const fetching = useSelector((state: globalState) => state.fetching);
  const dispatch = useDispatch();
  useEffect(() => {
    if (active) {
      dispatch({
        type: ActionTypes.GET_COMMISSION_DETAIL_REQUEST,
        conditions,
      });
    }
  }, [active]);

  const changePage = (currentPage) => {
    setConditions({ ...conditions, page: currentPage });
    dispatch({
      type: ActionTypes.GET_COMMISSION_DETAIL_REQUEST,
      conditions: { ...conditions, page: currentPage },
    });
  };
  const test = 0.0000038146900000000002;
  const renderContent = () => {
    const { type, status } = fetching;
    const { page, pageSize } = conditions;
    if (type === ActionTypes.GET_COMMISSION_DETAIL_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    } else if (
      !status &&
      commissionDetail.items &&
      commissionDetail.items.length
    ) {
      return (
        <TableRegular>
          <p className="table-text-instruction">
            Scroll right to see more <span>&gt;&gt;</span>
          </p>
          <div className="table-wrapper">
            <Table style={{ minWidth: '580px' }}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Time</th>
                  <th>Username</th>
                  <th>Volume</th>
                  <th>F1 - F20</th>
                  <th>Commission</th>
                </tr>
              </thead>
              <tbody className="section">
                {commissionDetail.items.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{pageSize * page - pageSize + key + 1}</td>
                      <td>
                        {moment(item.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                      </td>
                      <td>{item.user_id.username}</td>
                      <td>{`$ ${item.volumeBuy + item.volumeSell}`}</td>
                      <td>{item.level}</td>
                      <td>{`$ ${Number(item.amount.toFixed(11))}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="pagination">
            <Pagination
              pageSize={pageSize}
              handleChangePage={(page) => changePage(page)}
              currentPage={page}
              totalItems={commissionDetail.total}
            />
          </div>
        </TableRegular>
      );
    }
    return <p>No record found</p>;
  };
  return <div>{renderContent()}</div>;
}
