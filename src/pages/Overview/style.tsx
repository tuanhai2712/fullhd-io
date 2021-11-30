import styled from 'styled-components';

export const OverviewPageStyled = styled.div`
  background-color: #13183d;
  background-position-x: center;
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: contain;
`;

export const OverviewSectionStyled = styled.div`
  background-image: url(/overview/section1ov.jpg);
  background-size: cover;
  h4 {
    padding-top: 40px;
    padding-bottom: 20px;
    color: #cad1ff;
  }
`;

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonStyled = styled.div`
  button {
    background-color: #c5a30a;
    border: none;
    border-radius: 9px;
    color: #ffffff;
    height: 60px;
    font-size: 24px;
    width: 100%;
    max-width: 300px;
  }
`;

export const EcoSytemCardStyled = styled.div`
  position: relative;
  margin-bottom: 30px;

  img {
    width: 100%;
  }

  h5 {
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    width: 100%;
    top: 86%;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const StockExchangeSectionStyled = styled.div`
  background-image: url(/overview/section2bg.png);
  background-size: cover;
  padding: 80px 0px;
  .stock-exchange {
    text-align: center;
    .stock-exchange-card-container {
      margin-top: 40px;
    }
  }
`;

export const StockExchangeCardStyled = styled.div`
  margin-bottom: 30px;

  img {
    width: 100%;
  }

  h5 {
    padding: 40px 0px;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;
export const MainStyled = styled.div`
  .title {
    padding-top: 190px;
    padding-bottom: 200px;

    h1 {
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    h5 {
      font-size: 16px;
      font-weight: normal;
      color: #dadbe6;
      line-height: 1.4;
    }
  }

  .eco-system {
    text-align: center;
    padding: 80px 0px;
    text-align: center;
    .header-eco-system {
      max-width: 720px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      > p {
        margin-bottom: 40px;
      }
    }
  }

  .abilities {
    h2 {
      margin-top: 50px;
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 42px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 20px;
        margin-bottom: 20px;

        &:before {
          background: url(/img/icons/layout/tick.png) no-repeat;
          content: '';
          display: inline-block;
          width: 23px;
          height: 18px;
          margin-right: 24px;
        }
      }
    }

    .image {
      overflow: hidden;
    }
  }
`;

export const OurAdvantagesStyled = styled.div`
  background-image: url(/overview/section3.jpg);
  background-size: cover;
  padding: 80px 0px;
  .advantages {
    > h3 {
      margin-bottom: 80px;
    }
    .row {
      margin: 0;
    }
  }
  > h3 {
    margin-bottom: 40px;
  }
`;

export const AdvantagesCardStyled = styled.div`
  display: flex;
  padding: 40px 0px;
  .content {
    margin: 0px 20px;
  }
`;

export const WorldwideMarketSectionStyled = styled.div`
  padding: 80px 0px;
  @media (max-width: 1200px) {
    .col-media-12 {
      width: 100%;
      max-width: 100%;
      flex: unset;
      margin-bottom: 20px;
    }
  }
  .img-worldwide-market {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .icon-10-plus {
      margin-right: 20px;
    }
    > h3 {
      font-size: 28px;
      text-transform: uppercase;
      align-items: center;
      text-align: center;
      text-align: initial;
    }
  }
`;

export const FlagStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .flag-img {
  }
`;

export const CreateAccountSectionStyled = styled.div`
  .create-account {
    text-align: center;
    position: relative;
    background-image: url(/overview/section4.jpg);
    padding: 100px 0px;
    background-size: cover;
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0.04;
      z-index: -1;
    }

    .content {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;

      h2 {
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 44px;

        .highlighted {
          color: #eac51d;
        }
      }
      span {
        color: #cad1ff;
      }
      a {
        color: #cad1ff;
      }
    }
  }
`;
