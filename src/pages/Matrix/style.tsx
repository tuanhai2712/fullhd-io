import styled from 'styled-components';

export const MatrixPageStyled = styled.div`
  color: #fff;

  .sub-text {
    color: #cad1ff;
  }

  .title > h4 {
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .balance-cards {
    margin-bottom: 90px;
  }
`;

export const MatrixChart = styled.div`
  text-align: center;
  .dropdown {
    margin-bottom: 30px;
    > button {
      background-color: #fff !important;
      color: #000 !important;
      padding: 10px 20px;
      :active {
        background-color: #fff !important;
        color: #000 !important;
      }
      :focus {
        box-shadow: unset !important;
      }
    }
  }

  .user-tree-chart-container {
    @media (max-width: 767px) {
      padding: 20px 10px;

      .table-wrapper {
        overflow-x: auto;
      }

      table {
        min-width: 550px;
      }

      .username-col {
        width: 30%;
      }
    }
    .tg {
      border-spacing: 0;
      width: 100%;
    }
    .tg td {
      font-family: Arial, sans-serif;
      font-size: 12px;
      overflow: hidden;
      padding: 10px 10px;
      word-break: normal;
    }
    .tg th {
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 12px;
      font-weight: normal;
      overflow: hidden;
      padding: 10px 10px;
      word-break: normal;
    }
    .tg .tgthr-bzlr {
      vertical-align: middle;
      border-bottom: 1px solid white !important;
    }
    .tg .tgbnone {
      border-bottom: 3px solid #14183d !important;
    }
    .tg .textAlignL {
      text-align: left !important;
      padding-right: 50px;
      font-size: 0.8em;
      color: #d8d8f7;
    }
    .tg img {
      width: 20px;
    }
    .tg .tg-7eit {
      border-color: #d8d8f7;
      border: none !important;
      text-align: center;
    }
    .tg .tg-p6hs {
      border-color: #d8d8f7;
      text-align: center;
      vertical-align: middle;
    }
  }
`;

export const MatrixTabStyled = styled.div`
  .nav-pills .nav-item {
    margin-right: 50px;
  }

  .nav-pills .nav-item > a {
    color: #cad1ff;
    border-radius: unset;
    padding: 12px 0px;
    background-color: unset;
    font-size: 18px;
    font-weight: 500;

    &.tab-active {
      color: #fff;
      font-weight: bold;
      border-bottom: 1px solid;
    }
  }
`;

export const MatrixPackageTabStyled = styled.div`
  padding-top: 30px;
  padding-bottom: 260px;

  .packages {
    margin-bottom: 40px;

    .package {
      margin-bottom: 80px;
    }

    .info {
      .sub-text {
        font-size: 24px;
      }
    }
  }

  .gifts {
    h3 {
      font-weight: bold;
      font-size: 36px;
    }
  }
`;

export const MatrixUserListStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 240px;

  .dropdown-button {
    flex: 1;
    display: flex;
    justify-content: center;

    .dropdown-toggle {
      background-color: #cad1ff;
      border-radius: 9px;
      border: none;
      color: #13183d;
      height: 50px;
      width: 184px;

      &:after {
        display: none;
      }
    }
  }

  .user-chart {
    h4 {
      text-align: center;
      font-size: 24px;
    }
  }

  .input-search {
    .search-icon {
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 20px;
      height: 20px;
      z-index: 10;
    }

    input.form-control {
      background-color: #cad1ff;
      border-radius: 9px;
      color: #13183d;
    }
  }
`;

export const UpgradePackageModalStyled = styled.div`
  background-color: #ffffff;
  border-radius: 9px;
  color: #284464;
  padding: 30px;

  .modal-header,
  .modal-body {
    padding: 0;
    border: none;
  }

  .modal-header {
    .modal-title {
      font-size: 30px;
      font-weight: bold;
    }

    .close {
      color: #567190;
      font-size: 32px;
      padding: 20px;
    }
  }

  .modal-body {
    h3 {
      font-size: 16px;
    }

    .package {
      position: relative;
      margin-top: 30px;

      .logo {
        img {
          width: 100%;
        }

        .content {
          color: #ffffff;
          position: absolute;
          top: calc(50% - 20px);
          left: 20px;

          h5 {
            margin-bottom: 5px;
          }

          h4 {
            font-size: 36px;
          }
        }
      }
    }

    .payment {
      margin-top: 30px;

      .error-message {
        color: red;
        margin-top: 10px;
        margin-bottom: 0;
        text-align: center;
        position: absolute;
        bottom: 65px;
        width: 100%;
      }
    }
  }
`;

export const RadioContainer = styled.div`
  margin-bottom: 20px;

  .radio-container {
    margin-bottom: 5px;

    & > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      & ~ label {
        position: relative;
        padding-left: 30px;
        margin-bottom: 0;

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          border: 2px solid #000000;
          border-radius: 100%;
          width: 16px;
          height: 16px;
          left: 0;
          top: 4px;
        }

        &:after {
          background-color: #000000;
          width: 14px;
          height: 14px;
          left: 1px;
          top: 5px;
          display: none;
        }
      }

      &:checked ~ label {
        &:after {
          display: block;
        }
      }
    }
  }

  .button-container {
    margin-top: 40px;

    button {
      background-color: #0aa59f;
      border: none;
      border-radius: 7px;
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      height: 50px;
    }
  }
`;

export const SuccessUpgradedModalStyled = styled.div`
  background-color: #ffffff;
  border-radius: 9px;
  color: #284464;
  padding: 0 30px;

  .modal-body {
    padding-top: 0;

    .logo {
      ${props =>
        props.packageId
          ? `background: url('/matrix/package-${props.packageId}.png') no-repeat;`
          : 'background-color: #13183d;'}
      background-size: 100%;
      border-radius: 15px;
      padding: 30px 30px 25px;
      color: #ffffff;
      text-align: center;
      position: relative;
      top: -40px;

      @media (max-width: 575px) {
        background-size: 100% 100%;
      }

      h3 {
        font-size: 24px;
        margin-top: 230px;
      }

      h5 {
        font-weight: normal;
        font-size: 24px;
        text-transform: uppercase;
      }

      p {
        margin-bottom: 0;
        font-size: 14px;
      }
    }

    & > p {
      text-align: center;
      color: #284464;
      font-size: 18px;
      max-width: 300px;
      margin: 0 auto;
      position: relative;
      top: -20px;
    }

    button {
      background-color: #0aa59f;
      border: none;
      display: block;
      margin: 0 auto;
      color: #ffffff;
    }
  }
`;

export const UserChildStyled = styled.div`
  width: 20px;
  height: 20px;
  .sponsor-active {
    color: #e81c47;
  }
  .sponsor-unactive {
    color: #19e16e;
  }
  .sponsor-default {
    color: #84a3ed;
  }

  .main-user {
    color: #ffd200;
  }
`;

export const OverviewPageStyled = styled.div`
  background-color: #13183d;
  background-position-x: center;
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: contain;
`;

export const OverviewSectionStyled = styled.div`
  background-image: url(/matrix/matrixsection1.jpg);
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
  background-image: url(/matrix/matrixsection2.jpg);
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
    align-items: center;
    display: flex;
  }
`;

export const CreateAccountSectionStyled = styled.div`
  .create-account {
    text-align: center;
    position: relative;
    background-image: url(/matrix/matrixbg3.jpg);
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
