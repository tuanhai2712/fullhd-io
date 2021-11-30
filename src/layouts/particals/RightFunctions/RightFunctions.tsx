import React, { useState } from 'react';
import styled from 'styled-components';
import CountDown from './CountDown';
import BuySellComponent from './BuySellAction';
import { MaxAmountPlace, PlaceType } from '@constants/constants'
import NumberFormat from 'react-number-format';

const StyledRightFunctions = styled.div`
  padding: 10px;
  color: #7988b8;
  margin-top: 1.1em;

  @media (max-width: 767px) {
    padding-top: 0;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .income-zone {
    padding: 15px;
    border-radius: 10px;
    background-color: #283458;

    @media (max-width: 767px) {
      display: none;
    }

    .text-income {
      font-size: 30px;
      color: #03fb4b;
    }

    .text-profit {
      font-size: 24px;
      color: #03fb4b;
      margin-left: 15px;
    }
  }

  .amount-zone {
    padding: 15px;
    border-radius: 10px 10px 0 0;
    background-color: #283458;

    @media (max-width: 767px) {
      background-color: transparent;
      border-radius: 10px;
      flex: 0 0 calc(100% * 2 / 3 - 5px);
      padding: 0;
      order: 1;
    }

    .text-amount {
      color: #fff;
      font-size: 24px;
    }

    .amount-wrapper {
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 5px;
      background-color: #2f406b;
      font-size: 24px;

      @media (max-width: 767px) {
        height: 50px;
      }

      .text-input {
        flex: 1;
        width: 100%;
        margin-left: 5px;
        background: transparent;
        border: none;
        color: #7988b8;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .place-zone {
    display: flex;

    .button-place {
      flex: 1;
      background-color: #283458;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin-right: 5px;
      font-size: 26px;
      line-height: 1.5;

      &:focus {
        outline: none;
      }

      &:first-child {
        border-bottom-left-radius: 10px; 
      }

      &:last-child {
        margin-right: 0;
        border-bottom-right-radius: 10px; 
      }
    }

    @media (max-width: 767px) {
      flex-wrap: wrap;
      margin-top: 10px;
      flex: 0 0 calc(100% / 3);
      order: 3;

      .button-place {
        border-radius: 0;
        flex: 0 0 45%;
        max-width: 45%;
        margin-bottom: 5px;

        &:nth-child(n) {border-radius: 0;}
        &:nth-child(1) {border-top-left-radius: 10px;}
        &:nth-child(2) {border-top-right-radius: 10px;}
        &:nth-child(3) {border-bottom-left-radius: 10px; margin-bottom: 0;}
        &:nth-child(4) {border-bottom-right-radius: 10px; margin-bottom: 0;}
      }
    }
  }
`;

const RightFunctions: React.FC = () => {
  const [place, setPlace] = useState(1);

  const onChangeAmount = e => {
    const { value } = e.target;
    setPlace(value ? parseInt(value.toString().replace(/,/g, '')) : 0);
  }

  const handClickPlace = (type) => {
    let value: number;
    if (type === PlaceType.Add) {
      value = place + 1 >= MaxAmountPlace ? place : place + 1;
    } else if (type === PlaceType.Subtract) {
      value = place >= 1 ? place - 1 : 0;
    } else if (type === PlaceType.Multiply) {
      value = place * 2 >= MaxAmountPlace ? place : place * 2;
    } else {
      value = Math.round(place / 2);
    }
    setPlace(value);
  }

  return (
    <StyledRightFunctions>
      <div className='income-zone'>
        <div>INCOME</div>
        <div className="d-flex align-items-center">
          <span className="text-income">+95%</span>
          <span className="text-profit">+ ${((place || 0) * 95) / 100}</span>
        </div>
      </div>

      <div className='amount-zone mt-2'>
        <div className="d-none d-md-block">AMOUNT</div>
        <div className="amount-wrapper mt-2">
          <span className="text-currency">$</span>
          <NumberFormat
            thousandSeparator={true}
            decimalScale={0}
            maxLength={5}
            allowNegative={false}
            autoComplete="off"
            placeholder="0"
            className="text-input"
            onChange={onChangeAmount}
            value={place}
          />
        </div>
      </div>

      <div className="place-zone mt-md-1">
        <button className="button-place" onClick={() => handClickPlace(PlaceType.Add)}>
          <span>&#43;</span>
        </button>
        <button className="button-place" onClick={() => handClickPlace(PlaceType.Subtract)}>
          <span>&#8722;</span>
        </button>
        <button className="button-place" onClick={() => handClickPlace(PlaceType.Multiply)}>
          <span>&#215;</span>
        </button>
        <button className="button-place" onClick={() => handClickPlace(PlaceType.Devide)}>
          <span>&#247;</span>
        </button>
      </div>

      <CountDown />

      <BuySellComponent place={place} />
    </StyledRightFunctions>
  );
};

export default React.memo(RightFunctions);
