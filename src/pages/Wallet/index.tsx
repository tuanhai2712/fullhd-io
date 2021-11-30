import React, { useState } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { WalletStyled, WalletTabStyled } from './style';
import Deposit from './History/Deposit';
import Withdraw from './History/Withdraw';
import History from './History/History';
import Transfer from './History/Transfer';
import WalletPage from './WalletPage';

const Wallet = () => {
  const [state, setState] = useState({
    currencyTabs: [
      {
        key: 'walletUSDT',
        name: 'USDT',
        img: '/img/icons/layout/usdt.png',
        content: <WalletPage currency="usdt" />
      },
      {
        key: 'walletETH',
        name: 'ETH',
        img: '/img/icons/layout/eth.png',
        content: <WalletPage currency="eth" />
      }
    ],
    currencyCurrentTab: {
      key: 'walletUSDT',
      name: 'USDT',
      img: '/img/icons/layout/usdt.png',
      content: <WalletPage currency="usdt" />
    },
    historyTabs: [
      {
        key: 'walletDeposit',
        icon: 'icon-deposite',
        name: 'Deposit',
        content: <Deposit />
      },
      {
        key: 'walletWithdrawal',
        icon: 'icon-withdrawal',
        name: 'Withdrawal',
        content: <Withdraw />
      },
      {
        key: 'walletTransfer',
        icon: 'icon-deposite',
        name: 'Transfer',
        content: <Transfer />
      },
      {
        key: 'walletHistory',
        icon: 'icon-tradinghistory',
        name: 'History',
        content: <History />
      }
    ],
    historyCurrentTab: {
      key: 'walletDeposit',
      name: 'Deposit',
      content: <Deposit />
    }
  });

  /** event change tab currencies */
  const handleChangeTabCurrencies = (tab: {
    key: string;
    name: string;
    img: string;
    content: JSX.Element;
  }) => () => setState(state => ({ ...state, currencyCurrentTab: tab }));

  /** render tabs currency */
  const createCurrencyTabs = () => {
    const allTabs = state.currencyTabs.map((tab, index) => (
      <Nav.Item key={`Nav_Item_${index}`}>
        <Nav.Link
          eventKey={tab.key}
          className={
            state.currencyCurrentTab.key === tab.key ? 'tab-active' : ''
          }
          onClick={handleChangeTabCurrencies(tab)}
        >
          <span>
            <img src={tab.img} alt={tab.name} />
            {tab.name}
          </span>
        </Nav.Link>
      </Nav.Item>
    ));
    return <Nav variant="pills">{allTabs}</Nav>;
  };

  /** event change tab histories */
  const handleChangeTabHistories = (tab: {
    key: string;
    name: string;
    content: JSX.Element;
  }) => () => setState(state => ({ ...state, historyCurrentTab: tab }));

  /** render tabs history deposit/withdrawal/history */
  const createHistoryTabs = () => {
    const allTabs = state.historyTabs.map((tab, index) => (
      <Nav.Item key={`Nav_Item_${index}`}>
        <Nav.Link
          eventKey={tab.key}
          className={
            state.historyCurrentTab.key === tab.key ? 'tab-active' : ''
          }
          onClick={handleChangeTabHistories(tab)}
        >
          <span>
            <i className={tab.icon}></i>
            {tab.name}
          </span>
        </Nav.Link>
      </Nav.Item>
    ));
    return <Nav variant="pills">{allTabs}</Nav>;
  };

  return (
    <WalletStyled>
      <h1>Wallet</h1>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={12} xl={12}>
          <WalletTabStyled>
            <Tab.Container>
              {createCurrencyTabs()}
              <Tab.Content>{state.currencyCurrentTab.content}</Tab.Content>
            </Tab.Container>
          </WalletTabStyled>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <WalletTabStyled>
            <Tab.Container>
              {createHistoryTabs()}
              <Tab.Content>{state.historyCurrentTab.content}</Tab.Content>
            </Tab.Container>
          </WalletTabStyled>
        </Col>
      </Row>
    </WalletStyled>
  );
};

export default Wallet;
