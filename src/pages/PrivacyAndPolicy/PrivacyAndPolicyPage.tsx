import React, { useState } from 'react';
import {
  PrivacyAndPolicyPageStyled,
  PrivacyAndPolicyContentStyled,
  Container,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

import InformationUsing from './InformationUsing';
import CookiesAndEquipmentInformation from './CookiesAndEquipmentInformation';
import SecurityStatements from './SecurityStatements';
const leftMenu = [
  {
    id: 1,
    title: 'Information Using',
  },
  {
    id: 2,
    title: 'Cookies And Equipment Information',
  },
  {
    id: 3,
    title: 'Security Statements',
  },
];
const PrivacyAndPolicyPage: React.FC = () => {
  const [state, setState] = useState(1);
  const selectMenu = (id) => {
    setState(id);
  };

  const renderRightContent = () => {
    switch (state) {
      case 2:
        return <CookiesAndEquipmentInformation />;
      case 3:
        return <SecurityStatements />;
      default:
        return <InformationUsing />;
    }
  };
  return (
    <PrivacyAndPolicyPageStyled>
      <Header isHome={true} />
      <Container>
        <PrivacyAndPolicyContentStyled>
          <div className="header">
            <div className="col-12 col-md-12">
              <h1>Security and Privacy</h1>
            </div>

            <div className="row header-section">
              <div className="col-md-4 text-center logo">
                <img src="/privacy-policy/lock.png" alt="Lock" />
              </div>
              <div className="col-md-8 header-content-right">
                <h5>
                  The Security and Privacy policy is mentioned because FullHD
                  recognizes the importance of protecting Client' personal and
                  financial information.
                </h5>
                <br />
                <h5>
                  All Client information obtained by FullHD is used only to
                  assist the Company in servicing Client accounts, improving
                  service and delivering the products the Client has requested.
                  FullHD knows that clients may be worried about what it does
                  with this information.
                </h5>
                <br />
                <h5>
                  Therefore, the Privacy and Privacy policy at FullHD will
                  include 3 security and privacy terms to protect the interests
                  of clients
                </h5>
              </div>
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

export default PrivacyAndPolicyPage;
