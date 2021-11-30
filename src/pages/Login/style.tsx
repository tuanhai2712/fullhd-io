import styled from 'styled-components';

export const LoginPageStyled = styled.div`
  margin: 0;
  min-width: 100%;
  min-height: 100vh;
  background -color: var(--background-color);

  .logo {
    width: 142px;

    img {
      width: 100%;
    }
  }

  .forgot-pass-btn {
    background: unset;
    border: unset;
    font-size: 15px;
    font-weight: 600;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    margin: 0;
  }
  .forgot-pass-btn:active:focus {
    box-shadow: unset;
  }
  .forgot-pass-btn:active {
    color: #007bff !important;
    background-color: unset !important;
    border-color: unset !important;
  }
  .forgot-pass-btn:focus {
    box-shadow: unset !important;
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
