import styled from 'styled-components';

export const WalletStyled = styled.div`
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
`;

export const WalletTabStyled = styled.div`
  .nav-pills {
    border-bottom: 1px solid #2a2f55;
    margin-bottom: 30px;

    .nav-item {
      margin-right: 50px;

      & > a {
        color: #cad1ff;
        padding: 0 0 12px;
        background-color: unset;
        border-radius: 0;
        font-size: 24px;

        span {
          display: flex;
          align-items: center;

          img {
            height: 44px;
            margin-right: 12px;
          }

          i {
            position: relative;
            top: 3px;
            margin-right: 5px;
          }
        }

        &.tab-active {
          color: #fff;
          font-weight: bold;
          border-bottom: 1px solid #ffffff;
        }
      }
    }
  }
`;

export const CardStyled = styled.div`
  border-radius: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`;

export const LeftCardStyled = styled(CardStyled)`
  background-image: url(/wallet-left-card-background.png);
  padding: 60px 20px 34px 50px;

  .content {
    margin-bottom: 130px;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 19px;
  }

  p {
    span {
      font-weight: bold;
    }
  }

  .modal-buttons {
    display: flex;

    button {
      background-color: #0aa59f;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      height: 55px;
      width: 200px;
      margin-right: 15px;

      i {
        position: relative;
        top: 3px;
        margin-right: 5px;
      }
    }
  }
`;

export const RightCardStyled = styled(CardStyled)`
  background-image: url(/wallet-right-card-background.png);
  padding: 40px 20px;
  text-align: center;

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

  .qrinfo {
    .qrtext {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .qrnote {
      color: #9b8be7;
      max-width: 486px;
      margin: 0 auto;
    }
  }
`;

export const TableContainerStyled = styled.div`
  background-color: #21284f;
  border-radius: 8px;
  padding: 50px 55px 20px;

  @media (max-width: 767px) {
    padding: 20px 10px;

    .table-wrapper {
      overflow-x: auto;
    }

    table {
      min-width: 550px;
    }
  }

  table.table-dark {
    background-color: transparent;
  }

  thead {
    color: #cad1ff;

    th {
      font-weight: normal;
    }

    tr {
      border-bottom: 2px solid #2a325e;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #2a325e;
    }

    td {
      &.status {
        &--pending {
          color: #ffde8f;
        }

        &--confirm {
          color: #74cb16;
        }
      }
    }
  }

  th,
  td {
    padding-left: 0;
    padding-right: 0;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
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

      .error {
        font-size: 13px;
        margin: 5px 0 0 5px;
        color: red;
      }

      .spinner-border {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 10px;
      }

      input {
        background-color: #bed6f1;
        border: none;
        outline: none;
      }

      .input-unit {
        position: relative;

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

      .form-group {
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
