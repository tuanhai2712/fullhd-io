import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  OverviewPageStyled,
  OverviewSectionStyled,
  StockExchangeSectionStyled,
  Section4Styled,
  Container,
  MainStyled,
  OurAdvantagesStyled,
  AdvantagesCardStyled,
  CreateAccountSectionStyled,
  ButtonStyled,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

const IdealTradingPlatform = [
  {
    imageUrl: '/binary-option/boicon1.png',
    text: 'Remove Doubts',
    subText:
      'FULLHD TRADE helps Investors understand the risks and opportunities - Helping to remove doubts',
  },

  {
    imageUrl: '/binary-option/boicon2.png',
    text: 'Free Of Charge',
    subText: 'The Original is fixed, Investor always controls ',
  },

  {
    imageUrl: '/binary-option/boicon3.png',
    text: 'Easy to choose',
    subText:
      'Investors need to choose between Increase and Decrease - Simple and Easy!',
  },

  {
    imageUrl: '/binary-option/boicon4.png',
    text: 'Instant liquidity',
    subText:
      'Investors only need to look for profits and the transaction contract will be liquidated instantly, no worries or concerns.',
  },

  {
    imageUrl: '/binary-option/boicon5.png',
    text: 'Online Platform',
    subText:
      'FULLHD TRADE provides an online trading platform with the most convenience, even for inexperienced investors.',
  },
];
const Benefit = [
  {
    imageUrl: '/binary-option/boicon6.png',
    text: 'Easy to use',
    subText: 'Enjoy an easy to use platform',
  },

  {
    imageUrl: '/binary-option/boicon7.png',
    text: 'Fast Access',
    subText: 'Open an account and start trading in just a few minutes',
  },

  {
    imageUrl: '/binary-option/boicon8.png',
    text: 'Operate 24/7',
    subText:
      'Investors can trade at any time and customize trading according to the type of strategy they prefer.',
  },

  {
    imageUrl: '/binary-option/bosecurity.png',
    text: 'Security',
    subText:
      'Commitment to absolute security of Investor’s personal data, transaction and assets information ',
  },

  {
    imageUrl: '/binary-option/boicon9.png',
    text: 'Competitive Price',
    subText:
      'Prices are always close to the market, and FullHD are always clear about the risks and benefits from the beginning of the contract.',
  },
  {
    imageUrl: '/binary-option/boicon10.png',
    text: 'Costs Fair',
    subText:
      'Instant contract liquidity and clear history. Moreover, the Investor will receive a quote for a transaction and counter trade, creating a fair and transparent price ratio.',
  },

  {
    imageUrl: '/binary-option/boicon11.png',
    text: 'Trading according to strategy',
    subText:
      'Trading can be done based on sentiment or on technical and fundamental analysis',
  },
];

const BinaryOptionPage: React.FC = () => {
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <OverviewPageStyled>
      <Header isHome={true} />
      <MainStyled>
        <OverviewSectionStyled>
          <Container>
            <div className="title">
              <div className="col-12 col-md-6">
                <h1>FULLHD TRADE (BINARY OPTION) </h1>
                <h4>Smart Investment for Everyone</h4>
              </div>
            </div>
          </Container>
        </OverviewSectionStyled>
        <OurAdvantagesStyled>
          <Container>
            <div className="advantages">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                  <img
                    style={{ width: '100%' }}
                    src={`/binary-option/boa1.png`}
                    alt="Binary"
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-6 option-section2-content-right">
                  <h2>WHAT IS FULLHD TRADE</h2>
                  <h2>BINARY OPTION?</h2>
                  <br />
                  <span>
                    Binary is a type of option with a fixed payout. Investors
                    are allowed to predict the result from two options "Win or
                    Loss" - That is why it is called "Binary" right. If the
                    prediction is correct, Investor will receive the agreed
                    payment. Otherwise, Investor will lose the original stake
                    only.
                  </span>
                </div>
              </div>
              <br />
              <h2>Ideal trading platform with FULLHD TRADE</h2>
              <br />
              <span>
                The opportunity to receive up to 95% profit on the largest
                financial exchange market in the World
              </span>
              <div className="row">
                {IdealTradingPlatform.map((item, index) => (
                  <AdvantagesCardStyled
                    className="col-12 col-md-6 col-lg-4"
                    key={index}
                  >
                    <div>
                      <img src={item.imageUrl} alt={item.text} />
                    </div>
                    <div className="content">
                      <h4>{item.text}</h4>
                      <p>{item.subText}</p>
                    </div>
                  </AdvantagesCardStyled>
                ))}
              </div>
              <br />
              <h2>Benefit</h2>
              <br />
              <span>
                Enjoy an online trading platform with conditions ideal for both
                novice and experienced traders
              </span>
              <div className="row">
                {Benefit.map((item, index) => (
                  <AdvantagesCardStyled
                    className="col-12 col-md-6 col-lg-4"
                    key={index}
                  >
                    <div>
                      <img src={item.imageUrl} alt={item.text} />
                    </div>
                    <div className="content">
                      <h4>{item.text}</h4>
                      <p>{item.subText}</p>
                    </div>
                  </AdvantagesCardStyled>
                ))}
              </div>
            </div>
          </Container>
        </OurAdvantagesStyled>
        <StockExchangeSectionStyled>
          <Container>
            <div className="advantages">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 option-section2-content-right">
                  <h2>AFFILIATE PROGRAM</h2>
                  <br />
                  <span>
                    Opportunity to get CRAZY commissions just by referring other
                    investors to join the trade at FullHD
                  </span>
                  <br />
                  <ul className="menu-item-list-affiliate">
                    <li>
                      IB (Introducing brokers) is a reward that returns the
                      program for referring partners as well as training players
                      to participate in the FullHD system
                    </li>
                    <li>
                      Each player clicks on your referral link, they will become
                      an F1 member in your system.
                    </li>
                    <li>
                      When your F1 Member activates IB $100, you will
                      automatically receive a commission which depends on the
                      depth of the 10 levels
                    </li>
                    <li>
                      When each member activates IB, $100 FullHD earned will be
                      divided among the 10 upper lines in system of that member
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <img
                    style={{ width: '100%' }}
                    src={`/binary-option/ibsec.jpg`}
                    alt="Binary"
                  />
                </div>
              </div>
            </div>
          </Container>
        </StockExchangeSectionStyled>

        <Section4Styled>
          <Container>
            <div className="advantages">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 option-section2-content-right">
                  <span>
                    There are 03 conditions for receiving trading commissions
                    for partners:
                  </span>
                  <br />
                  <ul className="menu-item-list-affiliate">
                    <li>Partner need to activate IB =$100</li>
                    <li>Partner need to trade at least $100 per week</li>
                    <li>
                      The number of Member F1 activating IB will decide the
                      commission the partner receives
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <img
                    style={{ width: '100%' }}
                    src={`/binary-option/ibcms.png`}
                    alt="Binary"
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col-12 col-md-12 col-lg-6 option-section2-content-right">
                  <h2>Commission</h2>
                  <br />
                  <ul className="menu-item-list-affiliate">
                    <li>
                      Percentage of commissions the partner receives for each
                      floor will be calculated as shown in the table above:
                    </li>
                    <li>
                      The more Partners level up, the more they can accumulate
                      the commission percentage of many floors
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <img
                    style={{ width: '100%' }}
                    src={`/binary-option/commission.png`}
                    alt="Binary"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col-12 col-md-12 col-lg-12" style={{ textAlign: "center" }}>
                  <h2>Start trading now with FullHD TRADE</h2>
                  <span>A detailed guide for beginners</span>
                </div>
                <div className="col-12 col-md-12 col-lg-12" style={{ textAlign: "center" }}>
                  <span>Comming soon</span>
                </div>
              </div>
            </div>
          </Container>
        </Section4Styled>
        <CreateAccountSectionStyled>
          <div className="create-account">
            <div className="content">
              <h3>INCREASE PROFIT TODAY WITH FullHD TRADE!</h3>
              <ButtonStyled>
                <button className="button mb-4" onClick={goToRegister}>
                  JOIN US!
                </button>
              </ButtonStyled>
            </div>
          </div>
        </CreateAccountSectionStyled>
      </MainStyled>

      <Footer />
    </OverviewPageStyled>
  );
};

export default BinaryOptionPage;
