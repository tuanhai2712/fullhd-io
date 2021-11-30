import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  OverviewPageStyled,
  OverviewSectionStyled,
  EcoSytemCardStyled,
  StockExchangeSectionStyled,
  StockExchangeCardStyled,
  Container,
  MainStyled,
  OurAdvantagesStyled,
  AdvantagesCardStyled,
  WorldwideMarketSectionStyled,
  FlagStyled,
  CreateAccountSectionStyled,
  ButtonStyled,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

const ecoSystemData = [
  {
    imageUrl: '/home/binary.png',
    text: 'Trading room',
    router: '/tradingroom',
  },
  {
    imageUrl: '/home/ai.png',
    text: 'AI Robot',
    router: '/airobot',
  },
  {
    imageUrl: '/home/matrix.png',
    text: 'Matrix',
    router: '/matrix',
  },
  {
    imageUrl: '/home/copytrade.png',
    text: 'Copy Trade',
    router: '/copy-trading/login',
  },
  {
    imageUrl: '/home/game.png',
    text: 'Game',
  },
  {
    imageUrl: '/home/coin.png',
    text: 'Coin / Token',
  },
];
const stockExchangeData = [
  {
    imageUrl: '/overview/section201.jpg',
    text: 'The Huge Potential Market',
    subText:
      'The Cryptocurrency Market is an international decentralized financial market with global transactions of currencies up to  400 Billion USD per day.',
  },
  {
    imageUrl: '/overview/section202.jpg',
    text: 'Preeminent Benefits',
    subText:
      'Investment channels are not manipulated in terms of prices, high liquidity and large profits. Investors can trade anywhere and anytime',
  },
  {
    imageUrl: '/overview/section203.jpg',
    text: 'High Tech',
    subText:
      'FullHD is a highly advanced platform from 4.0 technology that can replace and improve all the disadvantages and limitations of traditional trading platforms.',
  },
];

const advantagesData = [
  {
    imageUrl: '/overview/icon1.png',
    text: 'Online Platform',
    subText:
      'The high-end platform integrates modern technology to best support the investment',
  },

  {
    imageUrl: '/overview/icon2.png',
    text: 'User-friendly',
    subText:
      'The interface is beautifully designed, scientific and easy to use',
  },

  {
    imageUrl: '/overview/icon3.png',
    text: 'Instant transactions',
    subText: 'Deposits and withdrawals are fast in just a few minutes',
  },

  {
    imageUrl: '/overview/icon4.png',
    text: 'High-Security ',
    subText:
      "FullHD is committed to absolute security of all players' trading and investment activities",
  },

  {
    imageUrl: '/overview/icon5.png',
    text: 'The Best Affiliate Program',
    subText: 'We build great affiliate programs with high commissions',
  },

  {
    imageUrl: '/overview/icon6.png',
    text: 'Investment Diversity',
    subText:
      'FullHD owns 6 different types of investment that help investors find and participate in the most suitable program',
  },
];

const flags1 = [
  '/overview/flag1.jpg',
  '/overview/flag2.jpg',
  '/overview/flag3.jpg',
  '/overview/flag4.jpg',
  '/overview/flag5.jpg',
];
const flags2 = [
  '/overview/flag6.jpg',
  '/overview/flag7.jpg',
  '/overview/flag8.jpg',
  '/overview/flag9.jpg',
  '/overview/flag10.jpg',
];

const OverviewPage: React.FC = () => {
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
              <div className="col-12 col-md-4">
                <h1>Overview</h1>
                <h4>Ecosystem Management</h4>
                <h5>
                FullHD is a platform that supports smart investments and build
                  a safe and sustainable income. In FullHD, we constantly update
                  new opportunities and create ideal trading conditions for
                  investors.
                </h5>
                <h5>
                  Profits are not the main objective of FullHD. Our platform is
                  built with the mission of shaping long-term investment goals
                  and accompanying customers to build their own properties.
                </h5>
              </div>
            </div>
          </Container>
        </OverviewSectionStyled>
        <StockExchangeSectionStyled>
          <Container>
            <div className="stock-exchange">
              <h2>FullHD TRADING</h2>
              <h3>SOLUTIONS TO BUILD A ENTERPRISE OF THE FUTURE</h3>
              <br />
              <span>
                Why should investors join the FullHD Exchange Platform? <br />
                What is the secret of the "Million Dollar" Exchange?
              </span>
              <div className="row stock-exchange-card-container">
                {stockExchangeData.map((item, index) => (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <StockExchangeCardStyled>
                      <div>
                        <img src={item.imageUrl} alt={item.text} />
                        <h5>{item.text}</h5>
                        <p>{item.subText}</p>
                      </div>
                    </StockExchangeCardStyled>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </StockExchangeSectionStyled>
        <Container>
          <div className="eco-system">
            <div className="header-eco-system">
              <h3>ECOSYSTEM DIVERSITY</h3>
              <br />
              <p>
              FullHD features innovative and scientific investment programs
                that help investors earn income and increase profits every day.
              </p>
            </div>
            <div className="row">
              {ecoSystemData.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <EcoSytemCardStyled>
                    <a href={item.router}>
                      <img src={item.imageUrl} alt={item.text} />
                      <h5>{item.text}</h5>
                    </a>
                  </EcoSytemCardStyled>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <OurAdvantagesStyled>
          <Container>
            <div className="advantages">
              <h3>Our Advantages</h3>
              <div className="row">
                {advantagesData.map((item, index) => (
                  <AdvantagesCardStyled
                    className="col-12 col-md-6 col-lg-4"
                    key={index}
                  >
                    <div>
                      <img src={item.imageUrl} alt={item.text} />
                    </div>
                    <div className="content">
                      <h4>{item.text}</h4>
                      <h6>{item.subText}</h6>
                    </div>
                  </AdvantagesCardStyled>
                ))}
              </div>
            </div>
          </Container>
        </OurAdvantagesStyled>
        <WorldwideMarketSectionStyled>
          <Container>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-lg-4 col-md-4 col-media-12">
                <div className="img-worldwide-market">
                  <div className="icon-10-plus">
                    <img src={'/overview/10+.png'} alt="10+" />
                  </div>
                  <h3>WORLDWIDE MARKETS</h3>
                </div>
                <span>
                FullHD platform operates in all of the largest markets, with
                  the goal of long-term and sustainable development giving
                  investors peace of mind
                </span>
              </div>
              <div className="col-xs-12 col-sm-12 col-lg-8 col-md-8 col-media-12">
                <FlagStyled>
                  {flags1.map((flag, idx) => {
                    return (
                      <div className="flag-img" key={idx}>
                        <img src={flag} alt="flag" />
                      </div>
                    );
                  })}
                </FlagStyled>
                <FlagStyled>
                  {flags2.map((flag, idx) => {
                    return (
                      <div className="flag-img" key={idx}>
                        <img src={flag} alt="flag" />
                      </div>
                    );
                  })}
                </FlagStyled>
              </div>
            </div>
          </Container>
        </WorldwideMarketSectionStyled>
        <CreateAccountSectionStyled>
          <div className="create-account">
            <div className="content">
              <h2>
                Join <span className="highlighted">FullHD</span> now with the
                most attractive benefits for investors!
              </h2>
              <ButtonStyled>
                <button className="button mb-4" onClick={goToRegister}>
                  Create an Account
                </button>
              </ButtonStyled>
              <span>Have an account ? </span>
              <a href="/register">Sign in</a>
            </div>
          </div>
        </CreateAccountSectionStyled>
      </MainStyled>

      <Footer />
    </OverviewPageStyled>
  );
};

export default OverviewPage;
