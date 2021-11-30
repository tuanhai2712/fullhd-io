import styled from 'styled-components';

export const HomePageStyled = styled.div`
  background-color: #0c1134;
  background-image: url(/home/background-home.jpg);
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: auto;
  background-position: top;
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

export const AdvantagesCardStyled = styled.div`
  position: relative;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }

  h2 {
    font-weight: bold;
    font-size: 60px;
    margin-top: 20%;
    white-space: pre-wrap;
  }

  .text-group {
    position: absolute;
    bottom: 0;
    padding-left: 70px;
    padding-right: 35px;
    padding-bottom: 20px;
    text-align: center;

    h4 {
      color: #debf31;
      font-weight: normal;
      font-size: 36px;
      margin-bottom: 80px;
      white-space: pre-wrap;
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    padding-left: 35px;
    padding-right: 70px;
    padding-bottom: 30px;

    h3 {
      font-weight: 900;
      font-size: 36px;
      margin-bottom: 24px;
      text-transform: uppercase;
      white-space: pre-wrap;
    }

    h5 {
      font-weight: normal;
      font-size: 16px;
    }
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
    margin-bottom: 150px;

    & > h4 {
      color: #f5c76f;
      font-weight: 900;
      font-size: 18px;
      margin-bottom: 25px;
      text-transform: uppercase;
    }

    h2 {
      font-size: 48px;
      text-transform: capitalize;
      margin-bottom: 60px;
    }
  }

  .advantages {
    margin-bottom: 150px;

    .row {
      margin: 0;
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

  .create-account {
    background-image: url(/overview/section4.jpg);
    background-size: cover;
    text-align: center;
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;

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
      max-width: 700px;
      margin: 0 auto;

      h2 {
        font-weight: bold;
        font-size: 60px;
        margin-bottom: 44px;

        .highlighted {
          color: #eac51d;
        }
      }
    }
  }
`;
