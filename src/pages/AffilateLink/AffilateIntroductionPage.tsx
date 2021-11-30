import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  OverviewPageStyled,
  OverviewSectionStyled,
  StockExchangeSectionStyled,
  StockExchangeCardStyled,
  Section4Styled,
  Section4CardStyled,
  Container,
  MainStyled,
  OurAdvantagesStyled,
  AdvantagesCardStyled,
  CreateAccountSectionStyled,
  ButtonStyled,
} from './style';
import Header from '@layouts/particals/Header/Header';
import Footer from '@layouts/particals/Footer/Footer';

const stockExchangeData = [
  {
    imageUrl: '/affilate/afficon1.png',
    text: 'The sum of the commission tiers is cumulative',
  },
  {
    imageUrl: '/affilate/afficon2.png',
    text: 'Commissions for each system member',
    style: { width: '260px' },
  },
  {
    imageUrl: '/affilate/afficon3.png',
    text: 'Million Dollar for the total income earned',
  },
  {
    imageUrl: '/affilate/afficon4.png',
    text: 'High value career rewards',
  },
];
const section4Data = [
  {
    imageUrl: '/affilate/ap1.png',
    text: 'FULLHD TRADE Affiliate Link',
    subText:
      'IB is a bonus program that accumulates up to 20 tiers of commission for partners when introducing other investors to FullHD',
    url: '/#',
  },
  {
    imageUrl: '/affilate/ap2.png',
    text: 'AI ROBOT Affiliate Link',
    subText: `Partners trade AI Robot to players receive up to 3 tiers of commission`,
    url: '/about-us/introduction-ai',
  },
  {
    imageUrl: '/affilate/ap3.png',
    text: 'MATRIX 3x10 Affiliate Link',
    subText: `Partner receives 7% for each member in the system. Partner's Income can reach 55 million dollars when the system is filled`,
    url: '/#',
  },
];
const section4Data2 = [
  {
    imageUrl: '/affilate/ap4.png',
    text: 'COIN PROGRAM Affiliate Link',
    subText:
      'The platform is being updated and will bring partners the best quality programs',
  },
  {
    imageUrl: '/affilate/ap5.png',
    text: 'GAME PROGRAM Affiliate Link',
    subText: `The platform is being updated and will bring partners the best quality programs`,
  },
];

const advantagesData = [
  {
    imageUrl: '/affilate/afficon5.png',
    text: 'Open and transparent Exchange ',
  },

  {
    imageUrl: '/affilate/afficon6.png',
    text: 'Timely payments',
  },

  {
    imageUrl: '/affilate/afficon7.png',
    text: 'Supported from modern technology',
  },

  {
    imageUrl: '/affilate/afficon8.png',
    text: 'Risk Free Investment',
  },

  {
    imageUrl: '/affilate/afficon9.png',
    text: 'Diverse Affiliate Programs',
  },

  {
    imageUrl: '/affilate/afficon10.png',
    text: 'Income up to millions of dollars',
  },
  {
    imageUrl: '/affilate/afficon11.png',
    text: 'Effective Trading Strategy',
  },

  {
    imageUrl: '/affilate/afficon12.png',
    text: 'Absolute Security',
  },
];

const AffilateIntroductionPage: React.FC = () => {
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
                <h1>FullHD Affiliate Program</h1>
                <h4>Find investors and enjoy huge profits</h4>
              </div>
            </div>
          </Container>
        </OverviewSectionStyled>
        <StockExchangeSectionStyled>
          <Container>
            <div className="stock-exchange">
              <h2>FullHD Affiliate Link</h2>
              <br />

              <span>
                Looking for members to participate in FullHD, the investor{' '}
                <br />
                will receive profits from the exchange's partner programs
              </span>
              <div className="row stock-exchange-card-container">
                {stockExchangeData.map((item, index) => (
                  <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <StockExchangeCardStyled>
                      <div>
                        <img
                          style={item.style}
                          src={item.imageUrl}
                          alt={item.text}
                        />
                        <h5>{item.text}</h5>
                      </div>
                    </StockExchangeCardStyled>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </StockExchangeSectionStyled>
        <OurAdvantagesStyled>
          <Container>
            <div className="advantages">
              <h2>
                The ONLY investment channel accompanies with <br /> partners to
                achieve sustainable success
              </h2>
              <br />
              <span>
                GREAT income for partners catching at an OPPORTUNITIES!
              </span>
              <div className="row">
                {advantagesData.map((item, index) => (
                  <AdvantagesCardStyled
                    className="col-12 col-md-6 col-lg-3"
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
            </div>
          </Container>
        </OurAdvantagesStyled>
        <Section4Styled>
          <Container>
            <div className="stock-exchange">
              <h2>Enjoy up to 05 Affiliate PROGRAMS from FullHD</h2>
              <div className="row stock-exchange-card-container">
                {section4Data.map((item, index) => (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <Section4CardStyled
                      style={{
                        backgroundImage: 'url(' + item.imageUrl + ')',
                        backgroundSize: 'cover',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div className="content-section-4">
                        <h5>{item.text}</h5>
                        <p>{item.subText}</p>
                      </div>
                      <a href={item.url} target="_blank">
                        See more
                      </a>
                    </Section4CardStyled>
                  </div>
                ))}
              </div>
              <div className="row stock-exchange-card-container">
                {section4Data2.map((item, index) => (
                  <div className="col-12 col-md-12 col-lg-6" key={index}>
                    <Section4CardStyled
                      style={{
                        backgroundImage: 'url(' + item.imageUrl + ')',
                        backgroundSize: 'cover',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <div>
                        <h5>{item.text}</h5>
                        <p>{item.subText}</p>
                      </div>
                      <p>Please wait for us</p>
                    </Section4CardStyled>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section4Styled>
        <CreateAccountSectionStyled>
          <div className="create-account">
            <div className="content">
              <h3>
                FullHD Affiliate Link program gives partners the most <br />{' '}
                effective and transparent tools to attract members, <br /> get
                ENORMOUS commissions and income.
              </h3>
              <ButtonStyled>
                <button className="button mb-4" onClick={goToRegister}>
                  Register a partner account
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

export default AffilateIntroductionPage;
