import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  HomePageStyled,
  Container,
  MainStyled,
  EcoSytemCardStyled,
  AdvantagesCardStyled,
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

const advantagesData = [
  {
    text: 'Powerful \nand \nEasy to use',
    first: true,
  },
  {
    imageUrl: '/home/security.png',
    text: '100% \nSecurity',
    subText:
      'Your personal information is 100% protected from third party controls',
  },
  {
    imageUrl: '/home/blockchain.png',
    text: 'Blockchain \nsmart contracts',
    subText:
      'We create secure, transparent, high-precision environments to trade and effectively protect your assets.',
  },
  {
    imageUrl: '/home/unlimited-income.png',
    text: 'unlimited\nincome',
    subText:
      'You can quickly make a profit and realize your dreams with this attractive Affiliate program.',
  },
  {
    imageUrl: '/home/artificial-intelligence.png',
    text: 'Artificial\nintelligence',
    subText:
      'We use artificial intelligence algorithm to predict price trends across popular electronic markets.',
  },
  {
    last: true,
    text: 'Create an account \nto become \na millionaires',
    buttonText: 'Sign up now',
  },
];

const abilities = [
  'Diverse ecosystem',
  'Instant liquidity',
  'Unlimited income',
  '24/7 Operations',
  'Transparent and intelligent investment channel',
  'Transaction at anytime, anywhere',
];

const HomePage: React.FC = () => {
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <HomePageStyled>
      <Header isHome={true} />
      <MainStyled>
        <Container>
          <div className="title">
            <div className="row">
              <div className="col-12 col-md-4">
                <h1>Ecosystem Management</h1>
                <h5>
                FullHD is a platform that supports smart investments and build
                  a safe and sustainable income. In FullHD, we constantly update
                  new opportunities and create ideal trading conditions for
                  investors. Profits are not the main objective of FullHD. Our
                  platform is built with the mission of shaping long-term
                  investment goals and accompanying customers to build their own
                  properties.
                </h5>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="eco-system">
            <h4>EcoSystem</h4>
            <h2>What we have</h2>
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

          <div className="advantages">
            <div className="row">
              {advantagesData.map((item, index) => (
                <AdvantagesCardStyled
                  className="col-12 col-md-6 col-lg-4"
                  key={index}
                >
                  {item.imageUrl && <img src={item.imageUrl} alt={item.text} />}
                  {item.first ? (
                    <h2>{item.text}</h2>
                  ) : item.last ? (
                    <div className="text-group">
                      <h4>{item.text}</h4>
                      <ButtonStyled>
                        <button onClick={goToRegister}>
                          {item.buttonText}
                        </button>
                      </ButtonStyled>
                    </div>
                  ) : (
                    <div className="content">
                      <h3>{item.text}</h3>
                      <h5>{item.subText}</h5>
                    </div>
                  )}
                </AdvantagesCardStyled>
              ))}
            </div>
          </div>

          <div className="abilities">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-5">
                <h2>Why choose us</h2>
                <ul>
                  {abilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-5 col-lg-7">
                <div className="image">
                  <img src="/home/laptop.png" alt="Why Chose Us" />
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="create-account">
          <div className="content">
            <h2>
              Join <span className="highlighted">FullHD</span> now with the most
              attractive benefits for investors!
            </h2>
            <ButtonStyled>
              <button className="button mb-4" onClick={goToRegister}>
                Create an Account
              </button>
            </ButtonStyled>
            <p>+ 5,235 active members are waiting for you</p>
          </div>
        </div>
      </MainStyled>

      <Footer />
    </HomePageStyled>
  );
};

export default HomePage;
