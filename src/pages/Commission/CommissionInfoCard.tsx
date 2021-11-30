import React from 'react';
import { CommissionCardStyled } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/index';
import ConfirmWithdrawal from '@components/ConfirmWithdrawal';
import Icon from '@components/Icon';
import moment from 'moment';
import Tooltips from '@components/Tooltips';

type CommissionInfoCardProps = {
  totalCommissionHasWithdrawn?: number;
  totalRefProfit?: number;
  totalIB?: number;
  members?: number;
  totalVolume?: number;
  enableWithdrawal?: boolean;
  withdrawalAction?: string;
  requestType?: string;
  successType?: string;
};

export default function CommissionInfoCard({
  totalCommissionHasWithdrawn,
  totalRefProfit,
  totalIB,
  members,
  totalVolume,
  enableWithdrawal = false,
  withdrawalAction,
  successType,
}: CommissionInfoCardProps) {
  const dispatch = useDispatch();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { userInfo, isDemo } = useSelector((state: globalState) => state.user);
  const { type, status } = fetching;
  const withdrawal = (password) => {
    if (
      withdrawalAction === ActionTypes.WITHDRAWAL_REF_PROFIT_REQUEST &&
      totalRefProfit
    ) {
      return dispatch({
        type: withdrawalAction,
        password,
        profit: totalRefProfit,
      });
    } else if (
      withdrawalAction === ActionTypes.WITHDRAWAL_IB_PROFIT_REQUEST &&
      totalIB
    ) {
      return dispatch({
        type: withdrawalAction,
        password,
        profit: totalIB,
      });
    }
    return;
  };

  const renderFirstView = () => {
    if (totalCommissionHasWithdrawn || totalCommissionHasWithdrawn === 0) {
      return (
        <>
          <div className="card-title">Total Commission Has Withdrawn</div>
          <div className="card-content">
            <span>{`$ ${totalCommissionHasWithdrawn}`}</span>
          </div>
        </>
      );
    }
    if (totalRefProfit || totalRefProfit === 0) {
      return (
        <>
          <div className="card-title">Volume Commission</div>
          <div className="card-content">
            <span>{`$ ${Math.round(totalRefProfit * 100) / 100}`}</span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="card-title">IB Commission</div>
        <div className="card-sub-title">
          <span>
            {userInfo.buy_ib_at &&
              moment(userInfo.buy_ib_at).format('HH:mm DD/MM/YYYY')}
          </span>
        </div>
        <div className="card-content">
          <span>{`$ ${totalIB}`}</span>
        </div>
        {(members || members === 0) && (
          <div className="card-sub-title">
            <span>{`${members} Members`}</span>
          </div>
        )}
      </>
    );
  };

  const renderSecondView = () => {
    if (enableWithdrawal) {
      return (
        <div className="btn-withdrawal">
          {isDemo ? (
            <Tooltips
              name="withdrawal"
              message=" Demo accounts cannot perform this action"
              placement="right"
            >
              <span className="d-inline-block" style={{ width: '100%' }}>
                <ConfirmWithdrawal
                  disabled
                  confirm={(password) => withdrawal(password)}
                  fetching={type === withdrawalAction && status}
                  success={type === successType && !status}
                >
                  <Icon name="withdrawal" />
                  Withdrawal
                </ConfirmWithdrawal>
              </span>
            </Tooltips>
          ) : (
              <ConfirmWithdrawal
                confirm={(password) => withdrawal(password)}
                fetching={type === withdrawalAction && status}
                success={type === successType && !status}
              >
                <Icon name="withdrawal" />
              Withdrawal
              </ConfirmWithdrawal>
            )}
        </div>
      );
    }
    return (
      <>
        <span className="card-title">Volume this week</span>
        <span className="card-content">{`$ ${totalVolume}`}</span>
      </>
    );
  };
  return (
    <CommissionCardStyled>
      <div className="first-view">{renderFirstView()}</div>
      <div className="second-view">{renderSecondView()}</div>
    </CommissionCardStyled>
  );
}
