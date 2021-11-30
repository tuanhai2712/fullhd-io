import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import { AIInvestmentStyled } from './style';
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';
import { isEmpty } from 'lodash';
import ConfirmWithdrawal from '@components/ConfirmWithdrawal';
import * as utils from '@utils/utils';
import Tooltips from '@components/Tooltips';

export default function AIInvestment() {
  const dispatch = useDispatch();
  const { aiBot } = useSelector((state: globalState) => state.aiRobot);
  const { isDemo } = useSelector((state: globalState) => state.user);
  const [invests, setInvests] = useState([] as any);
  const [selectedInvestmentPackage, setSelectedInvestmentPackage] = useState();
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  useEffect(() => {
    let activeList = [] as any;
    if (!isEmpty(aiBot)) {
      aiBot.invests.find((item) => {
        if (item.active) {
          activeList.push(item);
        }
      });
      setInvests(activeList);
      setSelectedInvestmentPackage(
        activeList.length ? activeList[0]._id : null
      );
    }
  }, [aiBot]);

  const totalProfitInvestmentPackages = () => {
    let total = 0;
    const { profits } = aiBot;
    profits.map((item, key) => {
      if (item.invest_id === selectedInvestmentPackage) {
        total = total + Number(item.profit.$numberDecimal);
      }
    });
    return total;
  };

  const refund = (password) => {
    dispatch({
      type: ActionTypes.REFUND_INVESTMENT_REQUEST,
      invest_id: selectedInvestmentPackage,
      password,
      investment: getAmountInvestmentPackage(),
      profit: totalProfitInvestmentPackages(),
    });
  };

  const investTime = () => {
    let time = '';
    invests.find((item) => {
      if (item._id === selectedInvestmentPackage) {
        time = `${moment(item.date_start).format('DD/MM/YYYY')}`;
      }
    });
    return time;
  };

  const renderPackages = () => {
    return invests.map((item, key) => {
      if (item._id !== selectedInvestmentPackage) {
        return (
          <Dropdown.Item
            onSelect={() => setSelectedInvestmentPackage(item._id)}
            key={key}
          >{`${key + 1}. Investment Package: $ ${
            item.amount.$numberDecimal
          }`}</Dropdown.Item>
        );
      }
      return null;
    });
  };

  const getAmountInvestmentPackage = () => {
    let amount = 0;
    invests.find((item) => {
      if (item._id === selectedInvestmentPackage) {
        amount = item.amount.$numberDecimal;
      }
    });

    return Number(amount);
  };
  const selectedPackage = () => {
    let text = '';
    invests.find((item, key) => {
      if (item._id === selectedInvestmentPackage) {
        text = `${key + 1}. Investment Package: $ ${
          item.amount.$numberDecimal
        }`;
      }
    });
    return text;
  };

  const detailProfitOfInvestmentPackage = () => {
    const { profits } = aiBot;
    let arrProfits = [] as any;
    profits.find((item) => {
      if (item.invest_id === selectedInvestmentPackage) {
        arrProfits.push(item);
      }
    });
    if (arrProfits.length) {
      return arrProfits.map((item, idx) => {
        return (
          <div className="inv-content" key={idx}>
            <span className="left-inv-content">{`${moment(
              item.date_from
            ).format('DD/MM/YYYY')} - ${moment(item.date_to).format(
              'DD/MM/YYYY'
            )}`}</span>
            <span className="right-inv-content">{`$ ${utils.formatter.format(
              item.profit.$numberDecimal
            )}`}</span>
          </div>
        );
      });
    }
    return <span>You are not profitable</span>;
  };

  const hasAlreadyInvest = () => {
    if (!invests || invests.length === 0) {
      return <span>You no investment yet</span>;
    }
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{selectedPackage()}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>{renderPackages()}</Dropdown.Menu>
        </Dropdown>
        <div className="inv-info-container">
          <div className="inv-content">
            <span className="left-inv-content">Date:</span>
            <span className="right-inv-content">{investTime()}</span>
          </div>
          <div className="inv-content">
            <span className="left-inv-content">Investment:</span>
            <div className="invest-amount">
              <span className="right-inv-content">{`$ ${getAmountInvestmentPackage()}`}</span>
              {isDemo ? (
                <Tooltips
                  name="refund"
                  message=" Demo accounts cannot perform this action"
                  placement="right"
                >
                  <span className="d-inline-block">
                    <ConfirmWithdrawal
                      disabled
                      confirm={(password) => refund(password)}
                      fetching={
                        type === ActionTypes.REFUND_INVESTMENT_REQUEST && status
                      }
                      success={
                        type === ActionTypes.REFUND_INVESTMENT_SUCCESS &&
                        !status
                      }
                    >
                      Refund
                    </ConfirmWithdrawal>
                  </span>
                </Tooltips>
              ) : (
                <ConfirmWithdrawal
                  confirm={(password) => refund(password)}
                  fetching={
                    type === ActionTypes.REFUND_INVESTMENT_REQUEST && status
                  }
                  success={
                    type === ActionTypes.REFUND_INVESTMENT_SUCCESS && !status
                  }
                >
                  Refund
                </ConfirmWithdrawal>
              )}
            </div>
          </div>
          <div className="inv-content inv-total">
            <span className="left-inv-content">Total Profit:</span>
            <span className="right-inv-content amount">{`$ ${utils.formatter.format(
              totalProfitInvestmentPackages()
            )}`}</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="title-detail">
          <h5>Detail</h5>
        </div>
        <div className="inv-info">
          <div className="inv-content inv-detail">
            <span className="left-inv-content">Week</span>
            <span className="right-inv-content">Profit</span>
          </div>
          {detailProfitOfInvestmentPackage()}
        </div>
      </>
    );
  };

  return (
    <AIInvestmentStyled>
      <div className="title-detail">
        <h5>AI Investment</h5>
      </div>
      {hasAlreadyInvest()}
    </AIInvestmentStyled>
  );
}
