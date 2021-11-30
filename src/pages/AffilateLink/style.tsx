import styled from 'styled-components';

export const AffilateLinkStyled = styled.div`
  color: #fff;
  max-width: 1460px;
  padding: 0 50px;
  margin: 50px auto 70px;

  @media (max-width: 767px) {
    padding: 0 20px;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 45px;
  }
  .btn-open-buy-ib-modal {
    font-size: 16px;
    padding: 10px 30px;
    background-color: #0aa59f;
    border-color: #0aa59f;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;
  }

  .btn-open-buy-ib-modal:focus {
    box-shadow: unset !important;
  }
  .btn-open-buy-ib-modal:active {
    background-color: #6dc1be !important;
    border-color: #6dc1be !important;
  }
  .btn-open-buy-ib-modal:hover {
    background-color: #0aa59f !important;
    border-color: #0aa59f !important;
  }
  .btn-open-buy-ib-modal:active:focus {
    box-shadow: unset !important;
  }
  .info-level {
    width: 50px;
    height: 50px;
    background-color: #392de2;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    .level {
      font-size: 13px;
    }
    .num {
      font-size: 18px;
      line-height: 20px;
    }
  }
  .affilate-guide {
    color: #fff;
    font-size: 18px;
    text-decoration: underline;
    margin-top: 40px;
  }
`;
export const CardStyled = styled.div`
  border-radius: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`;

export const RightCardStyled = styled(CardStyled)`
  background-image: url(/wallet-right-card-background.png);
  padding: 40px 20px;
  .input-group {
    & > .form-control,
    & > .btn {
      border: none;
      border-radius: 6px;
      height: 50px;
    }
  }

  .input-group > .form-control {
    background-color: #1b1d44;
    color: #9294bf;
    margin-right: 5px;

    &:not(:last-child) {
      border-radius: 6px;
    }
  }

  .input-group > .btn {
    background-color: #0aa59f;
    color: #ffffff;
    width: 122px;
  }
`;
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

export const AffilateItemListStyled = styled.div`
  margin-bottom: 30px;

  img {
    width: 100px;
  }
  h5 {
    padding: 20px 0px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    width: 100%;
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
  background-image: url(/affilate/affliatecover.jpg);
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
`;

export const StockExchangeCardStyled = styled.div`
  margin-bottom: 30px;

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
  .content-section-4 {
    margin-top: 60%;
  }
  a {
    color: #fff;
  }
  h5 {
    padding: 20px 0px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    width: 100%;
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
    align-items: center;
    display: flex;
  }
`;

export const CreateAccountSectionStyled = styled.div`
  .create-account {
    text-align: center;
    position: relative;
    background-image: url(/affilate/affsection3.jpg);
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
