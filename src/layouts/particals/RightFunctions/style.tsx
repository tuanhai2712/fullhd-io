import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 767px) {
    flex: 0 0 calc(100% * 2 / 3);
    margin-top: 10px;
    order: 4;
  }

  .button {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    border: none;

    &:focus {
      outline: none;
    }

    &:disabled {
      background: #C0C0C0;
    }

    .icon {
      font-size: 24px;
      margin: 0;
    }

    &-sell {
      background-color: #db4931;
      margin-left: 10px;
      .icon {
        color: #f85a59;
      }
    }

    &-buy {
      background-color: #2aa74e;
      .icon {
        color: #27ed6d;
      }
    }

    .text-amount {
      font-size: 30px;
    }

    .text-action {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: 767px) {
      .text-action {
        line-height: 0.5;
      }
    }
  }
`;

export const AlertWrapper = styled.div`
  margin-top: 10px;

  .alert {
    .icon {
      position: relative;
      top: 2px;
      margin-right: 5px;
    }
  }

  @media (max-width: 767px) {
    position: absolute;
    margin-top: 0;
    top: -100px;
    left: 100px;
  }
`
