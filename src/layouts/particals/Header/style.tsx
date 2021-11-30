import styled from 'styled-components';

export const DrawerScrollStyled = styled.div`
  overflow-y: auto;
  flex: 1;
  .updated-success-message {
    display: flex;
    margin-top: 10px;
    .icon {
      margin-right: 6px;
    }
    > p {
      font-size: 14px;
    }
  }
`;
export const HeaderStyled = styled.div`
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 64px;
    padding: 0px 20px;

    @media (max-width: 991px) {
      padding-left: 20px;
      padding-right: 10px;
    }

    @media (max-width: 767px) {
      align-items: flex-start;
      padding-top: 10px;
      padding-bottom: 15px;
      height: auto;
    }

    .logo {
      width: 216px;

      img {
        width: 100%;
      }

      @media (max-width: 767px) {
        width: 50%;
        margin-bottom: 20px;
      }
    }
    .logo:hover {
      cursor: pointer;
    }

    .nav {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      @media (max-width: 767px) {
        justify-content: flex-end;
        width: 100%;
      }

      a {
        color: #ffffff;
        margin-right: 40px;

        @media (max-width: 1199px) {
          margin-right: 20px;
        }
      }
      button {
        height: 40px;
        outline: none;
        width: 138px;
        margin-left: 20px;
      }
      .button-is-login {
        display: flex;
        flex-direction: row;
        button {
          display: flex;
          flex-direction: row;
          background-color: #19a78b;
          align-items: center;
          border: unset;
          color: #fff;
          border-radius: 5px;
          text-transform: uppercase;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
        }

        .btn-deposite {
          margin-left: 0;

          .icon {
            font-size: 1.7em;
            margin-right: 5px;
          }
        }
      }
      .button-is-logout {
        button {
          background-color: transparent;
          border: 2px solid #f5c76f;
          border-radius: 7px;
          color: #f5c76f;
        }
        button:hover {
          background-color: #f5c76f;
          color: #1b1255;
          font-weight: bold;
        }

        @media (max-width: 767px) {
          flex: 1;
          display: flex;
          justify-content: flex-end;

          button {
            width: 40%;
            margin-left: 10px;
          }
        }
      }

      .is-ib {
        width: 40px;
        height: 40px;
        background-color: #392de2;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        color: #fff;
        font-weight: bold;
        .level {
          font-size: 10px;
        }
        .num {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .account {
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        align-items: flex-end;
        margin-left: 20px;
        height: 40px;
        font-weight: bold;
        .type {
          font-size: 12px;
          color: #b6c3ed;

          @media (max-width: 767px) {
            letter-spacing: -0.4px;
          }
        }
        .money {
          color: #e9cb22;
          font-size: 16px;
        }
        .bonus-money {
          color: #b6c3ed;
          font-size: 10px;
        }
      }
      .switch-account-dropdown {
        .dropdown {
          .btn {
            background-color: unset;
            border-color: #392de2;
            height: 40px;
            width: 40px;
            padding: 5px 0px 0px;
            margin-left: 7px !important;
            .icon {
              color: #392de2;
            }
          }
          .btn:active {
            background-color: #7874b89c;
          }
          .btn:focus {
            box-shadow: unset;
          }
          .btn::after {
            display: none;
          }
        }
        .dropdown .show {
          background-color: #0e1438;
          color: #fff;
          left: auto !important;
          right: 0px !important;
          top: 7px !important;
          text-transform: capitalize;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          padding: 15px 10px !important;
          transform: translate(0px, 47px) !important;
          width: 300px;

          @media (max-width: 575px) {
            width: 250px;
          }

          .dropdown-header {
            color: #b6c3ed;
            padding: 0.25rem 0.5rem !important;
          }
          .item-account {
            > svg {
              width: 17px;
            }
          }

          .dropdown-item {
            align-items: center;
            display: flex;
            flex-direction: row;
            color: #b6c3ed;
            font-size: 0.875rem;
            padding: 0.25rem 0.5rem !important;
            .right-item {
              display: flex;
              flex-direction: column;
              margin-left: 15px;
              flex: 1;
              > p {
                margin: 0;
              }
            }
          }
          .dropdown-item:hover {
            background-color: #283458;
            border-radius: 5px;
          }
        }
        .demo-text {
          color: #e9cb22;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .icon-active {
          color: #d9172b;
        }
        .real-text {
          color: #19d95d;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .refresh-money {
          width: 40px;
          height: 40px;
          background: #666ea2;
          border: unset;
          border-radius: 5px;
          > svg {
            color: #fff;
            width: 20px;
          }
        }
        .refresh-money: hover {
          background: #19a78b;
        }
      }
      .notification {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        color: #b6c3ed;
        > span {
          font-size: 12px;
          text-transform: capitalize;
        }
        .icon {
          font-size: 1.2em;
        }
      }

      .profile-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 15px !important;
        width: unset;
        margin: 0;
        background: unset;
        border-color: unset;
        border: unset;
        padding: 0px;

        .avatar {
          width: 25px;
          height: 25px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #392de2;
          font-weight: bold;
          color: #fff;
          font-size: 12px;
          text-transform: uppercase;
          position: absolute;
          margin-top: -10px;
        }
        .username {
          text-transform: capitalize;
          font-size: 12px;
          color: #b6c3ed;
          margin-top: 10px;
          position: relative;
          margin-top: 28px;
        }
        > svg {
          position: absolute;
          width: 25px;
          height: 25px;
          margin-top: 25px;
        }
      }
      .profile-btn:focus {
        box-shadow: unset;
        background-color: unset !important;
        border-color: unset;
        border: unset;
      }
      .profile-btn:active {
        box-shadow: unset;
        background-color: unset !important;
        border-color: unset;
        border: unset;
      }
      .profile-btn:active:focus {
        box-shadow: unset !important;
      }
    }
  }
`;

export const ActiveLinksContainer = styled.div`
  position: relative;

  @media (max-width: 575px) {
    position: static;
  }
`;

export const ToggleActiveLinksButton = styled.span`
  display: block;
  position: absolute;
  right: 9px;
  top: -11px;
  outline: none;
  background: transparent;
  color: #fff;
  padding: 0 6px;

  span {
    width: 20px;
    height: 20px;
    position: relative;
    display: block;

    i,
    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      background-color: #fff;
      left: 0;
    }

    &:before {
      top: 4px;
    }
    i {
      top: 10px;
    }
    &:after {
      top: 16px;
    }
  }

  @media (max-width: 575px) {
    left: 15px;
    right: auto;
    top: 44px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ActiveLinksWrapper = styled.div`
  display: block;

  @media (max-width: 575px) {
    border: 0.05rem solid #392de2;
  }
  @media (max-width: 991px) {
    background: rgba(20, 24, 61, 0.5);
    border: 0.05rem solid #392de2;
    padding: 10px 20px 0;
    position: absolute;
    height: auto;
    width: auto;
    right: 14px;
    top: 25px;
    z-index: 200;
    ${(props) => (props.showOnMobile ? 'display: block;' : 'display: none;')}

    a {
      display: block;
      margin-bottom: 10px;
      white-space: nowrap;
    }
  }

  @media (max-width: 575px) {
    left: 15px;
    right: auto;
    top: 74px;
  }
`;

export const DrawerStyled = styled.div`
  * > p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
  * > svg {
    width: 20px;
  }
  .mdc-drawer {
    width: 340px;
    left: auto;
    right: 0;
    top: 0;
    display: flex;
    position: fixed;
    background-color: #0b1135;
    padding: 0 0 16px 16px;
  }
  .mdc-drawer .mdc-drawer__header {
    padding: 0;
  }
  .mdc-drawer-right-open {
    transform: translateX(0);
    transition-duration: 250ms;
  }
  .mdc-drawer-right-close {
    transform: translateX(100%);
    transition-duration: 250ms;
  }

  .drawer-header {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }
  .drawer-header > span {
    flex: 1;
    text-transform: capitalize;
    color: white;
    font-size: 24px;
    font-weight: 700;
  }
  .drawer-header > button {
    background: unset;
    border-color: unset;
    border: unset;
    padding: 0;
  }
  .drawer-header > button:focus {
    box-shadow: unset;
    background-color: unset !important;
    border-color: unset;
    border: unset;
  }
  .drawer-header > button:active {
    box-shadow: unset;
    background-color: unset !important;
    border-color: unset;
    border: unset;
  }
  .drawer-header > button:active:focus {
    box-shadow: unset !important;
  }
  .drawer-header > button > svg {
    width: 20px;
    color: #92abcf;
    margin-right: 15px;
  }
  .drawer-content {
    display: block;
    flex-direction: column;
    padding-right: 16px;
  }

  .drawer-content-header {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    text-transform: none;
    color: rgba(121, 136, 184, 255);
  }
  .drawer-info-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .drawer-info-content .info-email {
    color: rgba(240, 206, 30, 255);
    font-weight: bold;
    font-size: 18px;
  }
  .drawer-content .avatar {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #382de0;
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
  }

  .drawer-card-commission {
    display: flex;
    background-color: #202751;
    color: #fff;
    padding: 5px 5px 5px 10px;
    margin-top: 10px;
    border-radius: 10px;
    text-transform: capitalize;
    align-items: center;
  }
  .drawer-card-commission .total {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .drawer-card-commission .total .title {
    font-size: 16px;

    & > svg {
      height: 100%;
    }
  }

  .drawer-card-commission .total .value {
    display: flex;
    flex-direction: row;
  }
  .drawer-card-commission .value > svg {
    margin-left: -5px;
    height: 100%;
  }

  .drawer-card-commission .level {
    width: 50px;
    height: 50px;
    background-color: #382de1;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .drawer-card-commission .level .text {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .drawer-card-commission .level .num {
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
  }

  .drawer-card-content {
    display: flex;
    flex-direction: column;
    background-color: #202751;
    color: #fff;
    padding: 5px 10px;
    margin-top: 10px;
    border-radius: 10px;
    text-transform: capitalize;
  }

  .drawer-card-content .title-main-content {
    font-size: 16px;
  }

  .drawer-card-content .value {
    display: flex;
  }
  .drawer-card-content .value > svg {
    margin-left: -5px;
    height: 100%;
  }

  .drawer-footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .drawer-card-footer {
    display: flex;
    flex-direction: row;
    background-color: #202751;
    color: #fff;
    padding: 15px 10px;
    margin-top: 20px;
    border-radius: 10px;
    text-transform: capitalize;
  }
  .drawer-footer .btn-group {
    width: 100%;
    > button {
      display: flex;
      flex-direction: row;
      background-color: #202751;
      color: #fff;
      padding: 12px 10px;
      margin-top: 10px;
      border-radius: 10px;
      text-transform: capitalize;
      border: unset;
      width: 100%;
      > span {
        flex: 1;
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 16px;
      }
    }
    > button:focus {
      outline: unset;
      background-color: #485390;
    }
    > button:hover {
      outline: unset;
      background-color: #485390;
    }
  }

  .drawer-footer .logout {
    > button {
      background-color: #aa2c2d;
    }
    > button:focus {
      background-color: #b55d5d;
    }
    > button:hover {
      background-color: #b55d5d;
    }
  }
`;

export const DrawerProfileSettingsStyled = styled.div`
  .mdc-drawer__header {
    display: flex;
    align-items: center;
  }

  .copy-btn {
    background-color: unset;
    border-color: unset;
    box-shadow: unset;
    border: unset;
    padding: 0px;
    .icon-copy {
      color: #5e6593;
      font-size: 1em;
    }
  }

  .copy-btn:focus {
    outline: unset;
  }

  .loading {
    text-align: center;
    margin: 10px;
  }

  .drawer-header {
    width: 100%;
  }

  .drawer-header .back-btn {
    flex: 1;
    align-items: flex-start;
    display: flex;
    align-items: center;
  }
  .drawer-header .back-btn > span {
    color: rgba(94, 100, 138, 255);
  }
  .drawer-header .back-btn > svg {
    width: 25px;
  }

  .drawer-content .title {
    font-size: 24px;
    text-transform: capitalize;
    color: #fff;
    padding-left: 0;
  }
  .drawer-content .security-mess {
    height: fit-content;
    width: 100%;
    background-color: #28a980;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    padding: 15px;
    > p {
      font-size: 13px;
      font-weight: unset;
      text-transform: capitalize;
      padding: 0;
    }
    .label {
      font-size: 16px;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }

  .drawer-content .security {
    text-transform: capitalize;
    .title-item {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      margin-top: 25px;
      padding: 0;
      margin-bottom: 10px;
    }
    .title {
      font-size: 16px;
      color: rgba(255, 255, 255, 255);
    }
    .sub-title {
      font-size: 14px;
      color: rgba(94, 101, 147, 255);
      padding: 0px;
    }
    .security-card {
      align-items: center;
      display: flex;
      flex-direction: row;
      background-color: #202751;
      color: #fff;
      padding: 5px 15px;
      margin-top: 20px;
      border-radius: 10px;
      text-transform: capitalize;

      .content {
        display: flex;
        flex-direction: row;
        margin: 0px 10px;
        flex: 1;
        .desc {
          flex: 1;
        }
        .active {
          display: flex;
          align-items: center;
          justify-content: center;
          .btn-success {
            background-color: #28a980;
            border-color: #28a980;
          }
        }
      }
    }
  }

  .drawer-content .information {
    text-transform: capitalize;
    height: 100%;
    .title-item {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      margin-top: 25px;
      padding: 0;
      margin-bottom: 10px;
    }
    .disable-input {
      background-color: unset !important;
      border: 1px solid #202751;
    }
    .form-group {
      background-color: #202751;
      border-radius: 10px;
      padding: 5px 10px;
      > label {
        color: rgba(94, 101, 147, 255);
        font-size: 14px;
        margin: 0;
      }
      > input {
        color: #fff;
        padding: 0px;
        background-color: unset;
        font-size: 16px;
        height: 25px;
        border: unset;
      }
      .was-validated .form-control:invalid,
      .form-control.is-invalid {
        font-family: 'fontello';
      }
      > input:focus {
        box-shadow: none;
      }
    }
    > form .btn-group {
      width: 100%;
      > button {
        display: flex;
        flex-direction: row;
        background-color: #c7b251;
        color: #fff;
        padding: 15px 10px;
        margin-top: 20px;
        border-radius: 10px;
        text-transform: capitalize;
        border: unset;
        width: 100%;
        > span {
          flex: 1;
          align-items: center;
          display: flex;
          justify-content: center;
          font-size: 18px;
        }
      }
      > button:focus {
        outline: unset;
        background-color: #485390;
      }
    }
  }
`;

export const QRCodeStyled = styled.div`
  display: flex;
  margin-top: 20px;
  text-transform: capitalize;
  flex-direction: column;
  height: 100%;
  .qr-code-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: initial;
    margin-bottom: 10px;
    > p {
      margin-bottom: 5px;
      color: rgba(94, 101, 147, 255);
      font-size: 14px;
    }
  }
  .secret-code {
    margin-top: 5px;
    display: flex;
    width: 100%;
    .copy-btn {
      align-items: center;
      display: flex;
      :hover {
        cursor: pointer;
      }
      margin-left: 10px;
    }
  }
  .confirm-container {
    flex: 1;
    > form {
      .btn-group {
        width: 100%;
        > button {
          display: flex;
          flex-direction: row;
          background-color: #c7b251;
          color: #fff;
          padding: 15px 10px;
          margin-top: 20px;
          border-radius: 10px;
          text-transform: capitalize;
          border: unset;
          width: 100%;
          > span {
            flex: 1;
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 18px;
          }
        }
        > button:focus {
          outline: unset;
          background-color: #485390;
        }
      }
      .form-group {
        background-color: #202751;
        border-radius: 10px;
        padding: 5px 10px;
        > label {
          color: rgba(94, 101, 147, 255);
          font-size: 16px;
          margin: 0;
        }
        > input {
          color: #fff;
          padding: 0px;
          background-color: unset;
          font-size: 16px;
          height: 25px;
          border: unset;
        }
        .was-validated .form-control:invalid,
        .form-control.is-invalid {
          font-family: 'fontello';
        }
        > input:focus {
          box-shadow: none;
        }
      }
    }
  }
`;

export const DropdownSubMenuStyled = styled.div`
  > a:hover {
    cursor: pointer;
  }
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }
  @media (max-width: 575px) {
    .dropdown {
      width: 100%;
    }
    .sub-menu-item:before {
      left: -5px !important;
      top: 18px !important;
    }
    .about-us-menu {
      margin: 0px !important;
      justify-content: space-between;
      > svg {
        display: block !important;
      }
    }
    .dropdown-content {
      right: -155px;
      top: -40px !important;
    }
  }

  @media (min-width: 575px) and (max-width: 991px) {
    .sub-menu-item:before {
      left: -5px !important;
      top: 18px !important;
    }
    .dropdown {
      width: 100%;
    }
    .about-us-menu {
      margin: 0px !important;
      justify-content: space-between;
      > svg {
        display: block !important;
      }
    }
    .dropdown-content {
      right: -155px;
      top: -40px !important;
    }
  }

  .about-us-menu {
    display: flex;
    margin-right: 40px;
    > a {
      margin: 0px !important;
    }
    > svg {
      display: none;
      width: 15px;
    }
  }
  .dropdown-content {
    display: none;
    width: 100%;
    height: 100px;
    position: absolute;
  }

  .sub-menu-item {
    background-color: #0e1438;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 30px;
    position: absolute;
    :before {
      height: 9px;
      width: 9px;
      border: 1px solid #0e1438;
      border-right: 0;
      border-bottom: 0;
      top: -5px;
      left: 25px;
      transform: rotate(45deg);
      background: #0e1438;
      content: '';
      display: block;
      position: relative;
    }
  }

  .dropdown-content a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    margin: unset !important;
    color: #b6c3ed;
    font-size: 0.675rem;
  }

  .dropdown-content a:hover {
    background-color: #283458;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
