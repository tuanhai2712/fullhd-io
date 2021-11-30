import React, { useState } from 'react';
import {
  PrivacyAndPolicyPageStyled,
  PrivacyAndPolicyContentStyled,
  Container,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

import GeneralProvisions from './GeneralProvisions';
import RegulationOnTradingTransactions from './RegulationOnTradingTransactions';
import RegulationOnTheKYCPolicy from './RegulationOnTheKYCPolicy';
import RiskDisclosure from './RiskDisclosure';
import LiabilityOfOPTIONAndTheClient from './LiabilityOfOPTIONAndTheClient';
import ClaimsResolution from './ClaimsResolution';
import Communications from './Communications';
import TermAndTermination from './TermAndTermination';
import BonusPolicy from './BonusPolicy';
import AffiliateLinkPolicy from './AffiliateLinkPolicy';
import WithdrawalProceduresAndServiceFees from './WithdrawalProceduresAndServiceFees';

const leftMenu = [
  {
    id: 1,
    title: 'General provisions',
  },
  {
    id: 2,
    title: 'Regulation on trading transactions',
  },
  {
    id: 3,
    title: 'Regulation on the KYC policy',
  },
  {
    id: 4,
    title: 'Risk disclosure',
  },
  {
    id: 5,
    title: 'Liability of FullHD and the Client',
  },
  {
    id: 6,
    title: 'Claims resolution',
  },
  {
    id: 7,
    title: 'Communications',
  },
  {
    id: 8,
    title: 'Term and Termination',
  },
  {
    id: 9,
    title: 'Bonus policy',
  },
  {
    id: 10,
    title: 'Affiliate link policy',
  },
  {
    id: 11,
    title: 'Withdrawal procedures and service fees',
  },
];
const TermAndConditionsPage: React.FC = () => {
  const [state, setState] = useState(1);
  const selectMenu = (id) => {
    setState(id);
  };

  const renderRightContent = () => {
    switch (state) {
      case 2:
        return <RegulationOnTradingTransactions />;
      case 3:
        return <RegulationOnTheKYCPolicy />;
      case 4:
        return <RiskDisclosure />;
      case 5:
        return <LiabilityOfOPTIONAndTheClient />;
      case 6:
        return <ClaimsResolution />;
      case 7:
        return <Communications />;
      case 8:
        return <TermAndTermination />;
      case 9:
        return <BonusPolicy />;
      case 10:
        return <AffiliateLinkPolicy />;
      case 11:
        return <WithdrawalProceduresAndServiceFees />;
      default:
        return <GeneralProvisions />;
    }
  };
  return (
    <PrivacyAndPolicyPageStyled>
      <Header isHome={true} />
      <Container>
        <PrivacyAndPolicyContentStyled>
          <div className="header">
            <div className="col-12 col-md-12">
              <h1>Term And Conditions</h1>
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

export default TermAndConditionsPage;
