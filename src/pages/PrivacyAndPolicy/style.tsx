import styled from 'styled-components';

export const PrivacyAndPolicyPageStyled = styled.div`
  background-color: #13183d;
  background-position-x: center;
  background-repeat: no-repeat;
  color: #ffffff;
  background-size: contain;

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
`;

export const PrivacyAndPolicyContentStyled = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  .menu-item-container {
    display: flex;
    align-items: baseline;
  }
  @media (max-width: 767px) {
    .body-left-menu {
      padding: 0px !important;
      display: flex;
      justify-content: space-between;
      overflow-x: auto;
      > li {
        padding: 0px !important;
        min-width: fit-content;
        margin-right: 20px;
      }
      .active {
        border-bottom: 3px solid #fff;
        border-left: unset !important;
        color: #fff;
        font-weight: bold;
      }
    }
    .logo {
      margin-bottom: 20px;
    }
    .menu-item-container {
      border-bottom: 0.01em solid #423d3d;
      margin-bottom: 20px;
    }
  }
  .header {
    padding-top: 40px;
  }
  .header-section {
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #272a44;
  }
  .header-content-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .body {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .body-left-menu {
    padding-left: 15px;
    > li {
      list-style: none;
      margin-bottom: 20px;
      padding-left: 10px;
      font-size: 16px;
      color: #9a9ec7;
      font-weight: bold;
      :hover {
        cursor: pointer;
      }
    }
    .active {
      border-left: 3px solid #fff;
      color: #fff;
      font-weight: bold;
    }
  }
  .body-content-right {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
