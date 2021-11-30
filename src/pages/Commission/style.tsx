import styled from 'styled-components';

export const CommissionPageStyled = styled.div`
  color: #fff;
  max-width: 1460px;
  padding: 0 50px;
  margin: 50px auto 70px;
  @media (max-width: 767px) {
    padding: 0 20px;

    .card-col-12 {
      margin-bottom: 10px;
    }
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

  .info {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
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

  .info-username {
    margin-left: 15px;
    align-items: center;
    display: flex;
  }

  .info-username > span {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }

  .fetching {
    text-align: center;
    padding: 20px 0px;
  }
`;

export const CommissionCardStyled = styled.div`
  padding: 20px;
  background: url('/commission-tab.png') no-repeat;
  background-size: 100% 100%;

  @media (min-width: 768px) {
    .second-view .btn-withdrawal {
      .btn-group {
        width: 100%;
        button {
          width: 100%;
          font-size: 11px;
        }
      }
    }
  }

  border-radius: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .first-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 20px;
  }

  .second-view {
    display: flex;
    flex-direction: column;
  }

  .second-view .btn-group {
    width: 50%;
  }

  .second-view .btn-withdrawal .btn {
    background-color: #0aa59f;
    border-color: #0aa59f;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    color: #fff;
    font-size: 13px;
    justify-content: center;
  }

  .second-view .btn-withdrawal .icon {
    margin-right: 10px;
  }

  .card-title {
    font-size: 1em;
    color: #fff;
    margin: 0;
  }

  .card-sub-title {
    font-size: 10px;
    color: #fff;
    font-weight: 300;
  }

  .card-content {
    font-size: 1.5em;
    color: #fff;
    font-weight: bold;
  }
`;

export const CommissionTabStyled = styled.div`
  margin-top: 40px;

  .nav-pills {
    border-bottom: 1px solid #5d5b5b;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }

  .tab-col {
    padding: 0 10px 0px 0px;
  }

  .nav-pills .nav-item > a {
    color: #cad1ff;
    border-radius: unset;
    padding: 20px 0px;
    background-color: unset;
    font-size: 18px;
    font-weight: 500;
  }
  .nav-pills .nav-item > a:focus {
    outline: unset;
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

export const CommissionVolumeTabStyled = styled.div`
  .active-status {
    width: 50%;
    color: green;
    text-transform: uppercase;
    font-weight: bold;
  }
  .inactive-status {
    width: 50%;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const CommissionIBTabStyled = styled.div`
  .ib-starting-column {
    display: flex;
    align-items: center;
  }

  .ib-icon {
    width: 30px;
    height: 30px;
    background-color: #382de3;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
    text-transform: uppercase;
  }
`;

export const MemberListTabStyled = styled.div`
  * > svg {
    width: 25px;
    height: 25px;
  }
  .user-name-column {
    display: flex;
    align-items: center;
  }

  .level-icon {
    width: 50px;
    height: 50px;
    background-color: #382de3;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
    text-transform: uppercase;
    font-size: 13px;
  }

  .check-icon .icon {
    color: #47b532;
    font-size: 1.4em;
  }

  .close-icon .icon {
    color: #db2122;
    font-size: 1.4em;
  }
`;
