import React from 'react';
import { AICardStyled } from './style';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import moment from 'moment';

type AICardProps = {
  title: string;
  bg: string;
  cl: string;
};

export default function AICard({ title, bg, cl }: AICardProps) {
  const { configRates } = useSelector((state: globalState) => state.aiRobot);
  const renderConfigRates = () => {
    if (isEmpty(configRates)) {
      return 0;
    }
    const { rates, month_summary } = configRates;
    const TODAY = moment().weekday();
    if (title === 'Week') {
      if (TODAY === 0) return rates[rates.length - 1].sum;
      return rates[TODAY - 1].sum;
    }

    if (title === 'Day') {
      if (TODAY === 0) return 0;
      return rates[TODAY - 1].rate;
    }
    if (title === 'Month') {
      if (month_summary) {
        return Math.round(month_summary * 100) / 100;
      }
      return TODAY === 0 ? Math.round(rates[rates.length - 1].sum * 100) / 100 : Math.round(rates[TODAY - 1].sum * 100) / 100;
    }
  };
  return (
    <AICardStyled style={{ backgroundImage: 'url(' + bg + ')' }}>
      <div className="card-content">
        <span>{title}</span>
        <div className="card-right-content">
          <span className="title-card">Profit</span>
          <span
            style={{ color: cl }}
            className="amount"
          >{`+ ${renderConfigRates()} %`}</span>
        </div>
      </div>
    </AICardStyled>
  );
}
