import styled from 'styled-components';

export const PaginationStyled = styled.div`
  * {
    color: #000;
  }

  .pagination {
    margin-bottom: 0px;
  }

  .pagi-move {
    display: flex;
    align-items: center;
  }

  .pagi-move > a {
    background-color: unset;
    border-color: unset;
    border: none;
    color: #cad1ff;
    font-size: 13px;
    font-weight: 500;
  }
  .pagi-move > a:focus {
    box-shadow: unset;
  }

  .pagi-item > span {
    border: none;
    background-color: #203bf0 !important;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    margin: 0px 5px;
  }

  .pagi-item > a {
    border: none;
    background-color: unset !important;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #635f5f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin: 0px 5px;
  }
`;

export const SearchTextStyled = styled.div`
  margin-bottom: 15px;
  .input-search > input::placeholder {
    color: #000;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-search > input {
    border-radius: 7px;
    padding-top: 3px !important;
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
