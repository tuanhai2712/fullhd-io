import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  OverviewPageStyled,
  OverviewSectionStyled,
  StockExchangeSectionStyled,
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
    imageUrl: '/matrix/matrixicon1.png',
    text: 'Payment with no deadline',
    
  },

  {
    imageUrl: '/matrix/matrixicon2.png',
    text: 'Commissions up to 7%',
  },

  {
    imageUrl: '/matrix/matrixicon3.png',
    text: 'Income from the retire of system',
  
  },

  {
    imageUrl: '/matrix/matrixicon4.png',
    text: 'The highest career reward',
   
  },

  {
    imageUrl: '/matrix/matrixicon5.png',
    text: 'Get Income from lots of programs',
  },
  {
    imageUrl: '/matrix/matrixicon6.png',
    text: 'Automatic location updates',
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

const MatrixIntroductionPage: React.FC = () => {
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
                <h1>MATRIX FullHD 3x10</h1>
                <h4>Once Invest - Income to rest of my life</h4>
              </div>
            </div>
          </Container>
        </OverviewSectionStyled>
        <StockExchangeSectionStyled>
          <Container>
            <div className="advantages">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 option-section2-content-right">
                  <h2>Reward System in Matrix FullHD 3x10 </h2>
                  <br />
                  <span>
                    Only $10 Capital Original can creates an GOLD OPPORTUNITIES to reach $54 Millions Income 
                  </span>
                  <br />
                  <div style={{marginTop: "30px"}}>
                    <h5>Overview</h5>
                    <ul className="menu-item-list-affiliate">
                      <li>
                      Matrix FullHD is the mechanism of bonuses from each person who join Investor's system 
                      </li>
                      <li>
                      The bonus rate spans the system tier, up to 10 profit tiers
                      </li>
                    </ul>
                  </div>
                  <div style={{marginTop: "20px"}}>
                    <h5>Structure</h5>
                    <ul className="menu-item-list-affiliate">
                      <li>
                      There are 8 IB of Matrix: $10 - $50 - $100 - $200 - $500 - $1000 - $2000 - $5000 and 10 levels in System 
                      </li>
                    </ul>
                  </div>
                  <div style={{marginTop: "20px"}}>
                    <h5>Opportunity</h5>
                    <ul className="menu-item-list-affiliate">
                      <li>
                      2% of withdrawal fee in the system will be transferred to the Matrix for automatic updating and increasing investor position
                      </li>
                      <li>
                      Free withdrawal for the highest level members
                      </li>
                    </ul>
                  </div>
                  <div style={{marginTop: "20px"}}>
                    <h5>How It Works</h5>
                    <ul className="menu-item-list-affiliate">
                      <li>
                      In Matrix, each player will have 3 members in 1st tier, called Junior. Each member will have a maximum 3 Juniors in their 1st tier. It means that each player has 3 members in 1st tier, 9 members in 2rd tier, 27 members in 3nd tier, etc. 
                      </li>
                      <li>
                      The system lasts 10 levels and the total number of member in there can reach 59.049 persons 
                      </li>
                      <li>
                      The Matrix is ​​filled either by your members or by your uplines following a left-to-right rule
                      </li>
                      <li>
                      Your 4th friend onwards will be automatically transferred down to your 3 Juniors respectively. So, the sooner your friends join, the greater the chances of getting members and accumulating profits.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <img
                    style={{ width: '100%' }}
                    src={`/matrix/matrixfunnel.png`}
                    alt="Binary"
                  />
                </div>
              </div>
            </div>
          </Container>
        </StockExchangeSectionStyled>
        <OurAdvantagesStyled>
          <Container>
            <div className="advantages">
              <h2>Platforms that help Investors build their own business with a sustainable income </h2>
              <br />
              <span>
              90% traditional start-up fail right from the start, only 10% of Investors are lucky enough to achieve success!
              </span>
              <br/>
              <span>
              Therefore, The Matrix 3x10 program is developed around the World to create Businesses in the Industry 4.0 era - No investment risks!
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
                    </div>
                  </AdvantagesCardStyled>
                ))}
              </div>
              <br />
              <h2>The closer of the location - The bigger of the income</h2>
              <br />
              <span>
              Benefit to receive Affiliate commissions and passive income from upline, just join your participation time earlier than others!
              </span>
              <div className="row">
              <img
                    style={{ width: '100%' }}
                    src={`/matrix/table.jpg`}
                    alt="Binary"
                  />
              </div>
            </div>
          </Container>
        </OurAdvantagesStyled>
        <CreateAccountSectionStyled>
          <div className="create-account">
            <div className="content">
              <h3>The Matrix FullHD 3x10 can completely raise the number of 10% successful start-up up to 70, 80% and more!</h3>
              <h3>So why don't investors get started TODAY!</h3>
              <ButtonStyled>
                <button className="button mb-4" onClick={goToRegister}>
                JOIN US NOW!
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

export default MatrixIntroductionPage;
