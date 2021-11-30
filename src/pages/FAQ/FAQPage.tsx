import React, { useState } from 'react';
import {
  PrivacyAndPolicyPageStyled,
  PrivacyAndPolicyContentStyled,
  Container,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

import SignUpAndSignIn from './SignUpAndSignIn';
import StartTrading from './StartTrading';
import ActiveIB from './ActiveIB';
import GetAffilateLink from './GetAffilateLink';
import MakeDepositAndJoinIntoFullHDFeatures from './MakeDepositAndJoinIntoFullHDFeatures';
import WithdrawFromWallet from './WithdrawFromWallet';
import TransferMoney from './TransferMoney';
import CheckMyIBCommission from './CheckMyIBCommission';
import InvestAI from './InvestAI';
import UpdateMatrix from './UpdateMatrix';
import Start2FA from './Start2FA';

const leftMenu = [
  {
    id: 1,
    title: 'How could I sign up and Log in',
  },
  {
    id: 2,
    title: 'How could I start Trading?',
  },
  {
    id: 3,
    title: 'How could I activate the IB package?'
  },
  {
    id: 4,
    title: 'How could I get Affiliate Link?',
  },
  {
    id: 5,
    title: `How could I make a deposit and join into FullHD's features?`,
  },
  {
    id: 6,
    title: 'How can I withdraw funds from my eWallet?',
  },
  {
    id: 7,
    title: 'How could I transfer money to another user?',
  },
  {
    id: 8,
    title: 'How could I check my IB commission?',
  },
  {
    id: 9,
    title: 'How could I invest AI Robot',
  },
  {
    id: 10,
    title: 'How could I update to Matrix Package?',
  },
  {
    id: 11,
    title: 'How to start 2FA?',
  },
];
const FAQPage: React.FC = () => {
  const [state, setState] = useState(1);
  const selectMenu = (id) => {
    setState(id);
  };

  const renderRightContent = () => {
    switch (state) {
      case 2:
        return <StartTrading />;
      case 3:
        return <ActiveIB />;
      case 4:
        return <GetAffilateLink />;
      case 5:
        return <MakeDepositAndJoinIntoFullHDFeatures />;
      case 6:
        return <WithdrawFromWallet />;
      case 7:
        return <TransferMoney />;
      case 8:
        return <CheckMyIBCommission />;
      case 9:
        return <InvestAI />;
      case 10:
        return <UpdateMatrix />;
      case 11:
        return <Start2FA />;
      default:
        return <SignUpAndSignIn />;
    }
  };
  return (
    <PrivacyAndPolicyPageStyled>
      <Header isHome={true} />
      <Container>
        <PrivacyAndPolicyContentStyled>
          <div className="header">
            <div className="col-12 col-md-12">
              <h1>FAQs</h1>
            </div>
          </div>
          <div className="body">
            <div className="row">
              <div className="col-md-4">
                <div className="menu-item-container">
                  <ul className="body-left-menu">
                    {leftMenu.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          onClick={() => selectMenu(item.id)}
                          className={state === item.id ? 'active' : ''}
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="table-text-instruction">
                    <span>&gt;&gt;</span>
                  </p>
                </div>
              </div>
              <div className="col-md-8 body-content-right">
                {renderRightContent()}
              </div>
            </div>
          </div>
        </PrivacyAndPolicyContentStyled>
      </Container>
      <Footer />
    </PrivacyAndPolicyPageStyled>
  );
};

export default FAQPage;
