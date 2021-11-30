import styled from 'styled-components';

export const RegisterPageStyled = styled.div`
  margin: 0;
  min-width: 100%;
  min-height: 100vh;
  background -color: var(--background-color);

  .logo {
    width: 216px;

    img {
      width: 100%;
    }
  }

  .register-form {
    .cryptorio-main-form {
      border-radius: 14px;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      margin: 0;
      max-width: none;
      position: relative;

      .sub-text {
        color: #cad1ff;
        font-size: 15px;
      }

      .float-text {
        position: absolute;
        bottom: -40px;
      }
    }

    .sign-up-info {
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
      position: relative;
      height: 100%;
      overflow: hidden;

      .background {
        background: url('./sign-up-bg.png') no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      p {
        position: absolute;
        color: #e8a521;
        bottom: 80px;
        left: 60px;
        font-size: 30px;
        white-space: pre-wrap;

        @media screen and (max-width: 991px) {
          left: 0;
          bottom: 40px;
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          white-space: normal;
        }
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`

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
    text-align: center;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-contaner {
        background-color: #82d776;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        padding-top: 5px;
        margin-bottom: 20px;
        .icon {
          font-size: 2em;
          color: #fff;
        }
      }
      h4 {
        font-size: 30px;
        margin-top: 15px;
      }
    }
  }
`;
