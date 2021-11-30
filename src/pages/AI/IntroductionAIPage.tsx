import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  OverviewPageStyled,
  OverviewSectionStyled,
  StockExchangeSectionStyled,
  StockExchangeCardStyled,
  Section4Styled,
  Section4CardStyled,
  Section5Styled,
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
    imageUrl: '/ai/icon1.png',
    text: 'AI - Artificial Intelligence',
    subText:
      'AI technology (Artificial Intelligence) is becoming an indispensable trend of the 4.0 technology revolution for all businesses. AI harnesses the power of machines to learn, memorize, and automate analysis to improve and assist in making the best decisions.',
  },
  {
    imageUrl: '/ai/icon2.png',
    text: 'Cryptocurrency Market',
    subText: `This AI software applied to the FullHD's cryptocurrency market has been researched for more than 2 years by developers from Japan. This is one of the AIs equipped with many leading modern algorithms and technologies.`,
  },
  {
    imageUrl: '/ai/icon3.png',
    text: 'P2P',
    subText: `Peer to peer (P2P) network is a new form of business that helps businesses and investors earn big profits without too much investment. At FullHD, P2P activities are being effectively supported by AI technology. We don't just want to build an exchange, we want to give you opportunities for mutual growth and sustainable profits together!`,
  },
];
const section4Data = [
  {
    imageUrl: '/ai/image1.png',
    text: 'AI - Artificial Intelligence',
    subText:
      'AI technology (Artificial Intelligence) is becoming an indispensable trend of the 4.0 technology revolution for all businesses. AI harnesses the power of machines to learn, memorize, and automate analysis to improve and assist in making the best decisions.',
  },
  {
    imageUrl: '/ai/image2.png',
    text: 'Cryptocurrency Market',
    subText: `This AI software applied to the FullHD's cryptocurrency market has been researched for more than 2 years by developers from Japan. This is one of the AIs equipped with many leading modern algorithms and technologies.`,
  },
  {
    imageUrl: '/ai/image3.png',
    text: 'P2P',
    subText: `Peer to peer (P2P) network is a new form of business that helps businesses and investors earn big profits without too much investment. At FullHD, P2P activities are being effectively supported by AI technology. We don't just want to build an exchange, we want to give you opportunities for mutual growth and sustainable profits together!`,
  },
];

const advantagesData = [
  {
    imageUrl: '/ai/item1.png',
    text: 'Maintain Profitability',
    subText:
      'Thanks to the stable feature, AI Robot always ensures to maintain profit from 6% - 8% per week',
  },

  {
    imageUrl: '/ai/item2.png',
    text: 'Time-Saving',
    subText:
      'Automated, efficient, and rules-based trading strategies that help investors make profits without time constraints.',
  },

  {
    imageUrl: '/ai/item3.png',
    text: 'Create New Opportunities',
    subText:
      'AI Robot is always in a state of hunting for the market to seek opportunities to make difference profits',
  },

  {
    imageUrl: '/ai/item4.png',
    text: 'Intelligent',
    subText:
      'Ai Robot can process many gigabytes of data in just a few seconds - Thing that the human brain cannot achieve',
  },

  {
    imageUrl: '/ai/item5.png',
    text: 'Limit Emotions',
    subText:
      'Ai Robot helps investors to remove personal emotions from important decisions, minimizing mistakes due to stress or common psychology.  ',
  },

  {
    imageUrl: '/ai/item6.png',
    text: 'Long-term passive income',
    subText: `AI Robot can take advantage of the owner's crypto assets to create a passive income. They can support investors who want to keep assets in the long run.`,
  },
];

const IntroductionAIPage: React.FC = () => {
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
                <h1>AI ROBOT</h1>
                <h4>Make Automatic Investment And Trade With FullHD </h4>
              </div>
            </div>
          </Container>
        </OverviewSectionStyled>
        <StockExchangeSectionStyled>
          <Container>
            <div className="stock-exchange">
              <h2>
                AI Robot - Trend of Artificial Intelligence application in
                trading and investment
              </h2>
              <br />
              <span>
                The benefits of Artificial Intelligence to the crypto marke{' '}
                <br />
                The ability to optimize profits without spending a lot of
                capital
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
        <OurAdvantagesStyled>
          <Container>
            <div className="advantages">
              <h2>Automated Transactions With Thousands Of Benefits</h2>
              <br />
              <span>
                The "never sleeps" crypto market creates barriers when investors
                cannot control and monitor all the time, and <br />
                AI Robot will be the supervisor of every transaction, ensuring
                maximum profits and opportunities for Investors
              </span>
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
                      <span>{item.subText}</span>
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
              <h2>
                Amplify the profits from the limited capital and experience
              </h2>
              <br />
              <span>Safe - Effective - Long Term</span>
              <div className="row stock-exchange-card-container">
                {section4Data.map((item, index) => (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <Section4CardStyled
                      style={{
                        backgroundImage: 'url(' + item.imageUrl + ')',
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className="content-section-4">
                        <h5>{item.text}</h5>
                        <p>{item.subText}</p>
                      </div>
                    </Section4CardStyled>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section4Styled>
        <Section5Styled>
          <Container>
            <div>
              <h2>Affiliate program</h2>
              <br />
              <span>
                With AI ROBOT SELLING for others, Partner can receive <br />{' '}
                gratitude commissions from FullHD up to 3 tiers of fees
              </span>
            </div>
            <div className="row mt-40">
              <div className="col-12 col-md-12 col-lg-3">
                <span>AI ROBOT FEES</span>
                <h2>$100/Month</h2>
              </div>
              <div className="col-12 col-md-12 col-lg-9">
                <div className="row right-content">
                  <div className="col-12 col-md-6 col-lg-6">
                    <span>
                      Referring partners receive commissions up to 3 tiers :
                    </span>
                    <h2>$100/Month</h2>
                    <span>1st Tier: $30</span>
                    <br />
                    <span>2nd Tier: $15</span>
                    <br />
                    <span>3rd Tier: $5</span>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2">
                    <span>License fees</span>
                    <h2>$50</h2>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2">
                    <span>Profit per week</span>
                    <h2>6% - 8%</h2>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section5Styled>

        <CreateAccountSectionStyled>
          <div className="create-account">
            <div className="content">
              <h3>
                AI Robot will be the "KEY" to long-term profits even if
                investors only have a small capital and a little time.
              </h3>
              <h2 className="highlighted">DO NOT MISS</h2>
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

export default IntroductionAIPage;
