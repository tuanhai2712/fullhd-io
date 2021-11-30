import styled from 'styled-components';

export const AIPageHeaderSectionStyled = styled.div`
  background-image: url(/ai/aicover.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 575px) {
    background-image: unset;
    background-size: unset;
    .header-content {
      padding-top: 50px !important;
      padding-bottom: 50px !important;
    }
  }
  .header-content {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;
export const AIPageBodySectionStyled = styled.div`
  .header-content {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

export const AIPageStyled = styled.div`
  background-color: #13183d;
  background-position-x: center;
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: contain;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 45px;
  }
  .no-record {
    text-align: center;
  }
  .no-record > img {
    width: 500px;
    height: 500px;
  }
  .no-record .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ai-header-page {
    display: flex;
    align-items: flex-end;

    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .pd-right-0 {
    padding-right: 0;
  }

  .ai-chart {
    margin-top: 20px;
    .canvasjs-chart-credit {
      display: none;
    }
  }

  .left-content {
    display: flex;
    flex-direction: column;
    .btn-open-buy-ai-modal {
      font-size: 16px;
      padding: 10px 30px;
      background-color: #0aa59f;
      border-color: #0aa59f;
      text-transform: uppercase;
      font-weight: bold;
    }

    .btn-open-buy-ai-modal:focus {
      box-shadow: unset;
    }
    .btn-open-buy-ai-modal:active {
      background-color: #6dc1be;
      border-color: #6dc1be;
    }
    .btn-open-buy-ai-modal:active:focus {
      box-shadow: unset;
    }
    .btn-open-add-invest-modal {
      font-size: 16px;
      padding: 10px 30px;
      background-color: #e16e21;
      border-color: #e16e21;
      text-transform: uppercase;
      font-weight: bold;
    }

    .btn-open-add-invest-modal:focus {
      box-shadow: unset;
    }
    .btn-open-add-invest-modal:active {
      background-color: #e39e70;
      border-color: #e39e70;
    }
    .btn-open-add-invest-modal:active:focus {
      box-shadow: unset;
    }
  }

  .left-content .desc {
    margin-bottom: 5px;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }

  .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media (max-width: 575px) {
    .right-content {
      align-items: flex-start;
    }
    .profit-amount {
      text-align: start !important;
    }
  }

  .total-profit {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .profit-title {
    font-size: 16px;
    text-align: end;
  }

  .profit-amount {
    font-size: 24px;
    font-weight: 700;
    text-align: end;
  }

  .btn-withdrawal .btn {
    background-color: #0aa59f;
    border-color: #0aa59f;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding: 10px;
    color: #fff;
  }

  .btn-withdrawal .btn .icon {
    margin-right: 10px;
  }
`;

export const AIInvestmentStyled = styled.div`
  * > span {
    font-size: 13px;
  }
  padding: 20px;
  background-color: #2b2498;
  border-radius: 10px;
  height: 100%;
  .title-detail {
    margin-bottom: 15px;
  }
  .dropdown > button {
    background-color: #5571dc;
    border-color: #5571dc;
    width: 100%;
    margin-bottom: 15px;
  }

  .dropdown .dropdown-toggle {
    background-color: #5571dc !important;
    border-color: #5571dc !important;
  }
  .dropdown .dropdown-menu {
    background-color: #5571dc !important;
    border-color: #5571dc !important;
    padding: 0px;
    font-size: 14px;
    a {
      color: #fff;
      padding: 6px 12px;
      font-size: 13px;
    }

    a:hover {
      color: #5571dc;
    }
  }

  .dropdown .dropdown-toggle:focus {
    box-shadow: unset;
  }

  .dropdown > button {
    align-items: center;
    display: flex;
  }

  .dropdown > button > span {
    flex: 1;
    text-align: start;
  }
  .dropdown .dropdown-menu {
    width: 100%;
  }

  .inv-info-container {
    margin-bottom: 15px;
  }

  .inv-content {
    padding: 5px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .inv-content .left-inv-content {
    flex: 1;
  }

  .inv-content .invest-amount {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inv-content .invest-amount .btn {
    background-color: unset;
    border: unset;
    color: #76777d;
    font-size: 14px;
    text-decoration-line: underline;
    padding: 0px;
    font-weight: 400;
  }

  .right-inv-content {
    text-align: end;
    font-size: 14px;
    font-weight: 500;
  }

  .inv-total {
    margin-top: 20px;
    font-weight: bold;
  }
  .inv-total .amount {
    font-size: 20px;
  }

  .divider {
    border: 0.5px solid #453cb3;
    margin: 20px 0px;
  }

  .inv-detail {
    font-weight: bold;
  }
  .btn-refund {
    background-color: unset;
    border: unset;
    color: #76777d;
    font-size: 14px;
    text-decoration-line: underline;
    padding: 0px;
    font-weight: 400;
  }
`;

export const AICardStyled = styled.div`
  * {
    font-size: 13px;
  }
  background-size: 100% 100%;
  height: 200px;
  padding: 20px 10px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  .card-right-content {
    float: right;
    display: flex;
    flex-direction: column;
  }
  .title-card {
    text-align: end;
  }

  .amount {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const AITabStyled = styled.div`
  margin-top: 40px;

  .nav-pills {
    border-bottom: 1px solid #5d5b5b;
  }

  .nav-pills .nav-item {
    margin-right: 100px;
  }

  .nav-pills .nav-item > a {
    color: #cad1ff;
    border-radius: unset;
    padding: 20px 0px;
    background-color: unset;
    font-size: 18px;
    font-weight: 500;
  }

  .tab-active {
    color: #fefefe !important;
    font-weight: bold !important;
    border-bottom: 1px solid;
    animation-direction: alternate;
  }

  .tab-content {
    margin-top: 30px;
  }
`;
export const TableStyled = styled.div`
  padding: 20px 50px;
  background-color: #21284f;
  border-radius: 10px;

  @media (max-width: 767px) {
    padding: 20px 10px;

    .table-wrapper {
      overflow-x: auto;
    }

    table {
      min-width: 550px;
    }
  }

  .table {
    background-color: #21284f;
    color: #cad1ff;
  }
  .table > tbody > tr {
    border-bottom: 0.01em solid #423d3d;
  }
  .table > thead > tr {
    border-bottom: 1px solid #6f6f6f;
  }
  .table > tbody > tr > td {
    font-size: 13px;
    font-weight: 400;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .table > tbody > tr:nth-of-type(odd) {
    background-color: unset;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
  }
`;
export const AICommissionTabStyled = styled.div``;

export const TradeBotTabStyled = styled.div`
  .status-bot-trade {
    text-transform: uppercase;
    font-weight: bold !important;
  }
`;
export const AIHistoriesTabStyled = styled.div``;

export const ModalStyled = styled.div`
  background-color: #e3f0ff;
  border-radius: 9px;
  color: #284464;
  padding: 30px;

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 0;
    border: none;
  }

  .modal-header {
    .modal-title {
      font-size: 30px;
      font-weight: bold;
      display: flex;

      img {
        height: 30px;
        margin-right: 7px;
        top: 8px;
        position: relative;
      }
    }

    .close {
      color: #567190;
      font-size: 32px;
      padding: 20px;
    }
  }

  .modal-body {
    margin-top: 30px;
    .balance-is-not-enough {
      width: 100%;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #dc3545;
    }
    .fetching {
      text-align: center;
    }
    .ai-active {
      text-align: center;
      .bg-ai-active {
        display: flex;
        flex-direction: column;
        align-items: center;
        img > {
          width: 330px;
        }
        .check-ai-active {
          background-color: #82d776;
          height: 50px;
          width: 50px;
          border-radius: 25px;
          padding-top: 5px;
          margin-top: -40px;
          .icon {
            font-size: 2em;
            color: #fff;
          }
        }
      }
      h4 {
        font-size: 30px;
        margin-top: 15px;
      }
      button {
        background-color: #0aa59f;
        border: none;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        width: 50%;
        height: 50px;
        margin-top: 15px;
      }
    }
    .info {
      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 5px;

        .dots {
          border-bottom: 1px dotted #9eb9d7;
          flex: 1;
          position: relative;
          top: -5px;
          margin-left: 2px;
        }

        .amount-text {
          font-weight: bold;
          color: #26a17b;

          &--main {
            font-size: 30px;
          }
        }

        .highlighted {
          font-weight: bold;
        }
      }
    }

    .modal-form {
      label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      input.form-control {
        background-color: #bed6f1;
        border: none;
        outline: none;
      }

      .input-unit {
        position: relative;

        .is-invalid {
          background-image: unset;
        }
        input {
          padding-right: 70px;
        }

        .unit {
          color: #557190;
          font-weight: bold;
          position: absolute;
          top: 7px;
          right: 10px;
        }
      }
      .package-container {
        background-color: #2f249c;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        justify-content: center;
        color: #fff;
        span {
          font-size: 25px;
          font-weight: bold;
        }
      }
      .form-group {
        .btn-add-invest {
          background-color: #e16e21;
        }
        .btn-add-invest:focus {
          box-shadow: unset;
        }
        .btn-add-invest:active {
          background-color: #e39e70;
        }
        .btn-buy-ai {
          background-color: #0aa59f;
          margin-top: 20px;
        }
        .btn-buy-ai:focus {
          box-shadow: unset;
        }
        .btn-buy-ai:active {
          background-color: #56b6b2;
        }
        &.required {
          label {
            &:after {
              content: '*';
              margin-left: 5px;
              display: inline;
            }
          }
        }
      }

      button {
        background-color: #0aa59f;
        border: none;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        width: 100%;
        height: 50px;

        i {
          position: relative;
          top: 3px;
          margin-right: 7px;
        }
      }
    }
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
  background-image: url(/ai/section1.jpg);
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

export const StockExchangeSectionStyled = styled.div`
  background-image: url(/ai/section2.jpg);
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
    width: 100px;
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
export const Section4Styled = styled.div`
  padding: 80px 0px;
  .stock-exchange {
    .stock-exchange-card-container {
      margin-top: 40px;
    }
  }
`;
export const Section4CardStyled = styled.div`
  margin-bottom: 30px;
  height: 470px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: flex-end;
  h5 {
    padding: 20px 0px;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
  }
`;

export const Section5Styled = styled.div`
  padding: 115px 0px;
  background-image: url(/ai/bg2.png);
  background-size: cover;
  .right-content {
    border-left: 1px solid;
    justify-content: center;
  }
  h2 {
    margin-top: 15px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  @media (max-width: 991px) {
    .right-content {
      border-top: 1px solid;
      border-left: unset;
      justify-content: start;
      margin-top: 10px;
      padding-top: 10px;
    }
  }
  @media (max-width: 769px) {
    .right-content {
      border: unset;
      .col-12 {
        border-top: 1px solid;
        margin-top: 10px;
        padding-top: 10px;
      }
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
    text-align: center;
    .row {
      margin: 40px 0px 0px 0px;
    }
  }
`;

export const AdvantagesCardStyled = styled.div`
  display: flex;
  padding: 40px 0px;
  .content {
    margin: 0px 20px;
    text-align: start;
  }
`;

export const CreateAccountSectionStyled = styled.div`
  .create-account {
    text-align: center;
    position: relative;
    background-image: url(/ai/bg3.jpg);
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
