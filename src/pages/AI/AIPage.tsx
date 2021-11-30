import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import BuyAIModal from './BuyAIModal';
import {
  AIPageStyled,
  AITabStyled,
  AIPageHeaderSectionStyled,
  MainStyled,
  Container,
} from './style';
import { Row, Col, Tab, Nav, Spinner } from 'react-bootstrap';
import AIInvestment from './AIInvestment';
import AICard from './AICard';
import TradeBotTab from './TradeBotTab';
import AICommissionTab from './AICommissionTab';
import AIHistoriesTab from './AIHistoriesTab';
import { isEmpty } from 'lodash';
import AddInvestmentModal from './AddInvestmentModal';
import AIChart from './AIChart';
import ConfirmWithdrawal from '@components/ConfirmWithdrawal';
import Icon from '@components/Icon';
import Tooltips from '@components/Tooltips';
import moment from 'moment';

const AIPage: React.FC = () => {
  const dispatch = useDispatch();
  const { aiBot, totalAICommission } = useSelector(
    (state: globalState) => state.aiRobot
  );
  const { isDemo } = useSelector((state: globalState) => state.user);
  const fetching = useSelector((state: globalState) => state.fetching);
  const [key, setKey] = useState('tradeBot');

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_AI_BOT_REQUEST,
    });
    dispatch({
      type: ActionTypes.GET_CONFIG_RATES_REQUEST,
    });
  }, []);

  const onSelectTab = (k) => {
    setKey(k);
  };

  const totalProfitInvestmentPackages = () => {
    if (aiBot && aiBot.profit) {
      return Math.round(aiBot.profit.$numberDecimal * 1000) / 1000;
    }
    return 0;
  };
  const totalProfitAI = () => {
    if (totalAICommission && totalAICommission.commission_ib) {
      return Math.round(totalAICommission.commission_ib * 1000) / 1000;
    }
    return 0;
  };

  const withdrawalInvestmentProfit = (password, profit) => {
    dispatch({
      type: ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_REQUEST,
      password,
      profit,
    });
  };
  const withdrawalAICommission = (password, profit) => {
    dispatch({
      type: ActionTypes.WITHDRAWAL_AI_COMMISSION_REQUEST,
      password,
      profit,
    });
  };

  const renderContent = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.GET_AI_BOT_REQUEST && status) {
      return <Spinner animation="border" color="primary" />;
    }
    return (
      <MainStyled>
        <AIPageHeaderSectionStyled>
          <Container>
            <div className="header-content">
              <div className="col-12 col-md-6" style={{ padding: '0px' }}>
                <h1>AI Robot</h1>
              </div>
              <Row className="mb-40">
                <Col
                  xs={12}
                  sm={4}
                  md={4}
                  lg={6}
                  xl={6}
                  className="ai-header-page"
                >
                  <div className="left-content">
                    {isEmpty(aiBot) ||
                    (type === ActionTypes.BUY_AI_ROBOT_SUCCESS && !status) ? (
                      <>
                        <div className="desc">
                          <span>$100/30 days</span>
                        </div>

                        <BuyAIModal />
                      </>
                    ) : (
                      <>
                        <div className="desc">
                          <span>{`AI Starting From: ${moment(
                            aiBot.date_start
                          ).format('DD/MM/YYYY')}`}</span>
                        </div>
                        <AddInvestmentModal />
                      </>
                    )}
                  </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={3} xl={3}>
                  <div className="right-content">
                    <div className="total-profit">
                      <span className="profit-title">Total Commission AI</span>
                      <span className="profit-amount">{`$ ${totalProfitAI()}`}</span>
                    </div>
                    <div className="btn-withdrawal">
                      {isDemo ? (
                        <Tooltips
                          name="withdrawal"
                          message=" Demo accounts cannot perform this action"
                          placement="right"
                        >
                          <span className="d-inline-block">
                            <ConfirmWithdrawal
                              confirm={(password) =>
                                withdrawalAICommission(
                                  password,
                                  totalProfitAI()
                                )
                              }
                              disabled
                              fetching={
                                type ===
                                  ActionTypes.WITHDRAWAL_AI_COMMISSION_REQUEST &&
                                status
                              }
                              success={
                                type ===
                                  ActionTypes.WITHDRAWAL_AI_COMMISSION_SUCCESS &&
                                !status
                              }
                            >
                              <Icon name="withdrawal" />
                              Withdrawal
                            </ConfirmWithdrawal>
                          </span>
                        </Tooltips>
                      ) : (
                        <ConfirmWithdrawal
                          confirm={(password) =>
                            withdrawalAICommission(password, totalProfitAI())
                          }
                          fetching={
                            type ===
                              ActionTypes.WITHDRAWAL_AI_COMMISSION_REQUEST &&
                            status
                          }
                          success={
                            type ===
                              ActionTypes.WITHDRAWAL_AI_COMMISSION_SUCCESS &&
                            !status
                          }
                        >
                          <Icon name="withdrawal" />
                          Withdrawal
                        </ConfirmWithdrawal>
                      )}
                    </div>
                  </div>
                  <div></div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={3} xl={3}>
                  <div className="right-content">
                    <div className="total-profit">
                      <span className="profit-title">Total Profit</span>
                      <span className="profit-amount">{`$ ${totalProfitInvestmentPackages()}`}</span>
                    </div>
                    <div className="btn-withdrawal">
                      <div className="btn-withdrawal">
                        {isDemo ? (
                          <Tooltips
                            name="withdrawal"
                            message=" Demo accounts cannot perform this action"
                            placement="right"
                          >
                            <span className="d-inline-block">
                              <ConfirmWithdrawal
                                disabled
                                confirm={(password) =>
                                  withdrawalInvestmentProfit(
                                    password,
                                    totalProfitInvestmentPackages()
                                  )
                                }
                                fetching={
                                  type ===
                                    ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_REQUEST &&
                                  status
                                }
                                success={
                                  type ===
                                    ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_SUCCESS &&
                                  !status
                                }
                              >
                                <Icon name="withdrawal" />
                                Withdrawal
                              </ConfirmWithdrawal>
                            </span>
                          </Tooltips>
                        ) : (
                          <ConfirmWithdrawal
                            confirm={(password) =>
                              withdrawalInvestmentProfit(
                                password,
                                totalProfitInvestmentPackages()
                              )
                            }
                            fetching={
                              type ===
                                ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_REQUEST &&
                              status
                            }
                            success={
                              type ===
                                ActionTypes.WITHDRAWAL_INVESTMENT_PROFIT_SUCCESS &&
                              !status
                            }
                          >
                            <Icon name="withdrawal" />
                            Withdrawal
                          </ConfirmWithdrawal>
                        )}
                      </div>
                    </div>
                  </div>
                  <div></div>
                </Col>
              </Row>
            </div>
          </Container>
        </AIPageHeaderSectionStyled>
        <Container>
          <Row>
            <Col sm={4} md={4} lg={4} xl={4} className="mb-3 mb-sm-0">
              <AIInvestment />
            </Col>
            <Col sm={8} md={8} lg={8} xl={8}>
              <Row>
                <Col
                  xs={12}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  className="mb-3 mb-sm-0"
                >
                  <AICard title="Day" bg="/ai/ai-day.png" cl="#07dc07" />
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  className="mb-3 mb-sm-0"
                >
                  <AICard title="Week" bg="/ai/ai-week.png" cl="#e8d709" />
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  className="mb-3 mb-sm-0"
                >
                  <AICard title="Month" bg="/ai/ai-month.png" cl="#e8d709" />
                </Col>
              </Row>
              <Row>
                <Col
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="pd-right-0 ai-chart"
                >
                  <AIChart />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <AITabStyled>
                <Tab.Container
                  defaultActiveKey="tradeBot"
                  onSelect={(k) => onSelectTab(k)}
                >
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="tradeBot"
                        className={key === 'tradeBot' ? 'tab-active' : ''}
                      >
                        <span>Trade Bot</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="AICommission"
                        className={key === 'AICommission' ? 'tab-active' : ''}
                      >
                        <span>AI Commission</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="AIHistories"
                        className={key === 'AIHistories' ? 'tab-active' : ''}
                      >
                        <span>AI History</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="tradeBot">
                      <TradeBotTab />
                    </Tab.Pane>
                    <Tab.Pane eventKey="AICommission">
                      <AICommissionTab />
                    </Tab.Pane>
                    <Tab.Pane eventKey="AIHistories">
                      <AIHistoriesTab />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </AITabStyled>
            </Col>
          </Row>
        </Container>
      </MainStyled>
    );
  };
  return <AIPageStyled>{renderContent()}</AIPageStyled>;
};

export default AIPage;
