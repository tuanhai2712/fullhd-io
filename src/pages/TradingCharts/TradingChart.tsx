import React, { useEffect } from 'react';
import RightFunctions from '@layouts/particals/RightFunctions/RightFunctions';
import ChartRedirect from './ChartRedirect';
import CheckDemoAlert from '@components/CheckDemoAlert';
import styled from 'styled-components';
import Icon from '@components/Icon';
import Loading from './LoadingChart';

const ChartRedirectStyled = styled.div`
  bottom: 0;

  @media (max-width: 767px) {
    padding-bottom: 5px;
  }

  .react-stockchart > div {
    z-index: unset !important;
  }
`;

const CryptoStyled = styled.div`
  position: absolute;
  left: 1.5em;
  top: 1.5em;
  padding: 8px 15px 4px 10px;
  background-color: #283558;
  border-radius: 8px;
  border-color: #d8d8d8;
  border-width: 1px;
  z-index: 9999999;

  @media (max-width: 767px) {
    left: 30px;
    top: 8px;
    z-index: 99;
  }

  span {
    font-family: 'Circular Std';
    font-weight: 600;
    color: #d8d8d8;
    position: relative;
    top: -2px;
    left: 6px;
  }
`;

const TradingChartStyled = styled.div`
  .tradingChartRow {
    margin-right: 0;
    margin-left: 0;
  }
  .tradingChartRow .colOfChart {
    padding-right: 0px;
  }

  .tradingChartRow .colOfRightBar {
    padding-right: 5px;

    @media (max-width: 767px) {
      border-top: 1px solid #2a2f55;
    }
  }
`;

const TradingChart = () => {
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];

  useEffect(() => {
    if (body && html) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    /** exit component then clear interval */
    return () => {
      if (body && html) {
        html.style.overflow = 'auto';
        body.style.overflow = 'auto';
      }
    };
  }, []);

  return (
    <TradingChartStyled>
      <div className="row tradingChartRow">
        <CheckDemoAlert
          variant="danger"
          message="Please switch to main account to access this menu"
        />
        <CryptoStyled>
          <Icon name="bitcoin" color="#fcb12a" />
          <span>BTC/USDT</span>
        </CryptoStyled>
        <div className="col-12 col-md-8 col-lg-9 colOfChart">
          <ChartRedirectStyled>
            <ChartRedirect />
          </ChartRedirectStyled>
        </div>
        <div className="col-12 col-md-4 col-lg-3 colOfRightBar">
          <RightFunctions />
        </div>
        <Loading />
      </div>
    </TradingChartStyled>
  );
};

export default TradingChart;
