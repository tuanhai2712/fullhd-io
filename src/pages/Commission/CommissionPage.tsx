import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CommissionPageStyled, CommissionTabStyled } from './style';
import CommissionInfoCard from './CommissionInfoCard';
import CommissionVolumeTab from './CommissionVolumeTab';
import CommissionIBTab from './CommissionIBTab';
import MemberListTab from './MemberListTab';
import CommissionDetailTab from './CommissionDetailTab';
import { ActionTypes } from '@constants/index';
import Spinner from 'react-bootstrap/Spinner';

const CommissionPage: React.FC = () => {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const fetching = useSelector((state: globalState) => state.fetching);
  const dispatch = useDispatch();
  const history = useHistory();
  const { commissionStatistic } = useSelector(
    (state: globalState) => state.commission
  );
  const {
    commissionNotWithdrawal,
    ibCommissionNotWithdrawal,
    level,
    totalCommission,
    totalUserBuyIB,
    totalVolumeInWeek,
  } = commissionStatistic;
  const [tabKey, setTabKey] = useState('commissionDetail');

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_COMMISSION_STATISTIC_REQUEST });
  }, []);

  const onSelectTab = (k) => {
    setTabKey(k);
  };

  const goToAffilateLink = () => {
    history.push('/affiliate-link');
  };

  const renderCommissionStatistic = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.GET_COMMISSION_STATISTIC_REQUEST && status) {
      return <Spinner animation="border" variant="secondary" />;
    }
    return (
      <>
        <Col sm={12} md={4} lg={4} xl={4} className="card-col-12">
          <CommissionInfoCard
            totalCommissionHasWithdrawn={totalCommission}
            totalVolume={totalVolumeInWeek}
          />
        </Col>
        <Col sm={6} md={4} lg={4} xl={4} className="card-col-12">
          <CommissionInfoCard
            totalRefProfit={commissionNotWithdrawal}
            enableWithdrawal={true}
            withdrawalAction={ActionTypes.WITHDRAWAL_REF_PROFIT_REQUEST}
            successType={ActionTypes.WITHDRAWAL_REF_PROFIT_SUCCESS}
          />
        </Col>
        <Col sm={6} md={4} lg={4} xl={4}>
          <CommissionInfoCard
            totalIB={ibCommissionNotWithdrawal}
            members={totalUserBuyIB}
            enableWithdrawal={true}
            withdrawalAction={ActionTypes.WITHDRAWAL_IB_PROFIT_REQUEST}
            successType={ActionTypes.WITHDRAWAL_IB_PROFIT_SUCCESS}
          />
        </Col>
      </>
    );
  };
  const renderUserLevel = () => {
    const { type, status } = fetching;
    if (type === ActionTypes.GET_COMMISSION_STATISTIC_REQUEST && status) {
      return <Spinner animation="border" variant="info" />;
    }
    return (
      <div className="info-level">
        <span className="level">Level</span>
        <span className="num">{level}</span>
      </div>
    );
  };
  return (
    <CommissionPageStyled>
      <h1>Commission</h1>
      <>
        <Row>
          <Col>
            <div className="info">
              {renderUserLevel()}
              <div className="info-username">
                {!userInfo.is_ib ? (
                  <Button
                    onClick={() => goToAffilateLink()}
                    className="btn-open-buy-ib-modal"
                  >
                    Buy IB
                  </Button>
                ) : (
                  <div className="info-level">
                    <span className="level">IB</span>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>{renderCommissionStatistic()}</Row>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <CommissionTabStyled>
              <Tab.Container
                defaultActiveKey="commissionDetail"
                onSelect={(k) => onSelectTab(k)}
              >
                <Nav variant="pills">
                  <Col sm={3} md={3} lg={3} xl={3} className="tab-col">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="commissionDetail"
                        className={
                          tabKey === 'commissionDetail' ? 'tab-active' : ''
                        }
                      >
                        <span>Commission Detail</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col sm={3} md={3} lg={3} xl={3} className="tab-col">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="commissionVolume"
                        className={
                          tabKey === 'commissionVolume' ? 'tab-active' : ''
                        }
                      >
                        <span>Volume Commission</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col sm={3} md={3} lg={3} xl={3} className="tab-col">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="commissionIB"
                        className={
                          tabKey === 'commissionIB' ? 'tab-active' : ''
                        }
                      >
                        <span>IB Commission</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col sm={3} md={3} lg={3} xl={3} className="tab-col">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="memberList"
                        className={tabKey === 'memberList' ? 'tab-active' : ''}
                      >
                        <span>Member List</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="commissionDetail">
                    <CommissionDetailTab
                      active={tabKey === 'commissionDetail'}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="commissionVolume">
                    <CommissionVolumeTab
                      active={tabKey === 'commissionVolume'}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="commissionIB">
                    <CommissionIBTab active={tabKey === 'commissionIB'} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="memberList">
                    <MemberListTab active={tabKey === 'memberList'} />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </CommissionTabStyled>
          </Col>
        </Row>
      </>
    </CommissionPageStyled>
  );
};

export default CommissionPage;
