import styled from 'styled-components';

export const OverviewPageStyled = styled.div`
  background-color: #13183d;
  background-position-x: center;
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: contain;
`;

export const OverviewSectionStyled = styled.div`
  background-image: url(/binary-option/bocover.jpg);
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
  margin-top: 40px;
  button {
    background-color: #26adc1;
    border: none;
    border-radius: 9px;
    color: #ffffff;
    height: 60px;
    font-size: 18px;
    width: 100%;
    max-width: 300px;
  }
`;

export const StockExchangeSectionStyled = styled.div`
  background-image: url(/affilate/affsection2.jpg);
  background-size: cover;
  padding: 80px 0px;
  .stock-exchange {
    text-align: center;
    .stock-exchange-card-container {
      margin-top: 40px;
    }
  }
  .menu-item-list-affiliate {
    padding-left: 20px;
    margin-top: 30px;
  }
`;

export const Section4Styled = styled.div`
  padding: 80px 0px;
  .stock-exchange {
    .stock-exchange-card-container {
      margin-top: 40px;
    }
  }
  .menu-item-list-affiliate {
    padding-left: 20px;
    margin-top: 30px;
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
      color: #9a9ec7;
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
  padding: 80px 0px;
  .advantages {
    .row {
      margin: 40px 0px 0px 0px;
    }
  }
  .option-section2-content-right {
    justify-content: center;
    display: flex;
    flex-direction: column;
    > h2 {
      text-align: start;
    }
    > span {
      text-align: start;
    }
  }
`;

export const AdvantagesCardStyled = styled.div`
  display: flex;
  padding: 40px 0px;
  .content {
    margin: 0px 20px;
  }
`;

export const CreateAccountSectionStyled = styled.div`
  .create-account {
    text-align: center;
    position: relative;
    background-image: url(/binary-option/ctabgbo.jpg);
    padding: 180px 0px;
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
        margin-bottom: 40px;
      }
      .highlighted {
        color: #eac51d;
        margin-top: 40px;
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
