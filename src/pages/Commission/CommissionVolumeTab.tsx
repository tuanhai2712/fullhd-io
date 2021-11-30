import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { CommissionVolumeTabStyled } from './style';
import Pagination from '@components/Pagination';
import moment from 'moment';
import TableRegular from '@components/TableRegular';
import * as utils from '@utils/utils';

type CommissionVolumeTabProps = {
  active: boolean;
};

export default function CommissionVolumeTab({
  active,
}: CommissionVolumeTabProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const { commissionVolume } = useSelector(
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
        type: ActionTypes.GET_COMMISSION_VOLUME_REQUEST,
        conditions,
      });
    }
  }, [active]);

  const changePage = (currentPage) => {
    setConditions({ ...conditions, page: currentPage });
    dispatch({
      type: ActionTypes.GET_COMMISSION_VOLUME_REQUEST,
      conditions: { ...conditions, page: currentPage },
    });
  };

  const renderContent = () => {
    const { type, status } = fetching;
    const { page, pageSize } = conditions;
    if (type === ActionTypes.GET_COMMISSION_VOLUME_REQUEST && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    } else if (
      !status &&
      commissionVolume.items &&
      commissionVolume.items.length
    ) {
      return (
        <TableRegular>
          <p className="table-text-instruction">Scroll right to see more <span>&gt;&gt;</span></p>
          <div className="table-wrapper">
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Week</th>
                  <th>Ref</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="section">
                {commissionVolume.items.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{pageSize * page - pageSize + key + 1}</td>
                      <td>{`Week ${item._id.week} / ${item._id.year}`}</td>
                      <td>{`$ ${utils.formatter.format(item.total)}`}</td>
                      <td>
                        {item.isValidCommissions.find(
                          (value) => value === true
                        ) ? (
                          <p className="active-status">active</p>
                        ) : (
                          <p className="inactive-status">inactive</p>
                        )}
                      </td>
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
              totalItems={commissionVolume.total}
            />
          </div>
        </TableRegular>
      );
    }
    return <p>No record found</p>;
  };
  return (
    <CommissionVolumeTabStyled>{renderContent()}</CommissionVolumeTabStyled>
  );
}
