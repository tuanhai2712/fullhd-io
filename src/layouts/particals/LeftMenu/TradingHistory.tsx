import React, { useState, useEffect } from 'react';
import moment from 'moment';
import immutable from 'immutability-helper';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TradingApi from '@services/api/TradingApi';
import { round } from '@utils/utils';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import { ArrowDropUp } from '@styled-icons/material/ArrowDropUp';
import { ArrowUpward } from '@styled-icons/evaicons-solid/ArrowUpward';
import { ArrowDownward } from '@styled-icons/evaicons-solid/ArrowDownward';
import { formatter } from '@utils/utils';

const HistoryItemWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #222e4e;
  border-radius: 10px;
  width: 100%;
  -webkit-animation: conditionalOpen 0.5s normal forwards ease-in-out;
  -moz-animation: conditionalOpen 0.5s normal forwards ease-in-out;
  animation: conditionalOpen 0.5s normal forwards ease-in-out;
  -webkit-transform-origin: 50% 0%;
  -moz-transform-origin: 50% 0%;
  transform-origin: 50% 0%;

  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .block-content {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    -webkit-animation: conditionalOpen 0.5s normal forwards ease-in-out;
    -moz-animation: conditionalOpen 0.5s normal forwards ease-in-out;
    animation: conditionalOpen 0.5s normal forwards ease-in-out;
    -webkit-transform-origin: 50% 0%;
    -moz-transform-origin: 50% 0%;
    transform-origin: 50% 0%;

    &__detail {
      line-height: 1.5rem;
      display: flex;
      justify-content: space-between;

      .dot-div {
        border-bottom: thin dashed gray;
        flex: 1;
        height: 18px;
      }
    }
  }

  @-webkit-keyframes conditionalOpen {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
  @-moz-keyframes conditionalOpen {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
  @keyframes conditionalOpen {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @-webkit-keyframes conditionalClose {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
  @-moz-keyframes conditionalClose {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
  @keyframes conditionalClose {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
`;

const TradingHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TradingHistory() {
  const [state, setState] = useState({
    pageNumber: 0,
    pageSize: 50,
    isShowLoadmore: false,
    historyData: [],
    isShowBlockDetail: false
  } as any);
  const isDemo = useSelector((state: globalState) => state.user.isDemo);

  useEffect(() => {
    TradingApi.getTradingHistories({
      limit: state.pageSize,
      start: state.pageNumber * state.pageSize
    }).then(result => {
      setState(state => ({
        ...state,
        isShowLoadmore: result.data.length >= state.pageSize,
        historyData: state.historyData.concat(result.data)
      }));
    });
  }, [state.pageNumber]);

  const loadMore = () => {
    setState(state => ({ ...state, pageNumber: state.pageNumber + 1 }));
  };

  const showBlockDetail = i => {
    setState(state =>
      immutable(state, {
        historyData: {
          [i]: {
            isShowBlockDetail: { $set: !state.historyData[i].isShowBlockDetail }
          }
        }
      })
    );
  };

  return (
    <TradingHistoryWrapper>
      {isDemo && <p className="text-center text-muted">DEMO</p>}

      {state.historyData.length === 0 && (
        <p className="text-center text-muted">
          You have made no profitable trades this week yet.
        </p>
      )}

      {state.historyData.map((history: any, index: number) => (
        <HistoryItem
          key={index}
          history={history}
          isShowBlockDetail={history.isShowBlockDetail}
          onClickShowHideBlock={() => showBlockDetail(index)}
        />
      ))}

      {state.historyData.length > 0 && (
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      )}
      {state.isShowLoadmore && (
        <button className="btn btn-primary" onClick={loadMore}>
          Load more
        </button>
      )}
    </TradingHistoryWrapper>
  );
}

export const HistoryItem = ({
  history,
  onClickShowHideBlock,
  isShowBlockDetail = false
}) => {
  const symbol = history.block_id;
  return (
    <HistoryItemWrapper>
      <div className="item-content">
        <div className="item-content__detail">
          <span>{moment(history.createdAt).subtract(1, "minutes").format('HH:mm')}</span>
          <span>{moment(history.createdAt).format('D MMM')}</span>
        </div>
        <div className="item-content__detail">
          {history.volumeBuy > 0 && (
            <span className="d-flex align-items-center">
              <ArrowUpward color="#1fbf75" height="14px" width="14px" />
              {history.volumeBuy}
            </span>
          )}
          {history.volumeSell > 0 && (
            <span className="d-flex align-items-center">
              <ArrowDownward color="#c82b3c" height="14px" width="14px" />
              {history.volumeSell}
            </span>
          )}
        </div>
        <div className="item-content__detail align-items-center">
          {history.amount >= 0 ? (
            <span className="text-success">Win</span>
          ) : (
            <span className="text-danger">Lose</span>
          )}
        </div>
        <div className="item-content__detail align-items-end pr-1">
          <span
            className={history.amount >= 0 ? 'text-success' : 'text-danger'}
          >
            {history.amount >= 0
              ? `+$${Math.floor(history.amount * 100) / 100}`
              : `-$${Math.floor(history.amount * -100) / 100}`}
          </span>
        </div>
        {isShowBlockDetail ? (
          <ArrowDropUp width="25px" onClick={onClickShowHideBlock} />
        ) : (
          <ArrowDropDown width="25px" onClick={onClickShowHideBlock} />
        )}
      </div>

      {isShowBlockDetail && (
        <div className="block-content">
          <div className="block-content__detail">
            <span>Income</span>
            <div className="dot-div"></div>
            <span>95%</span>
          </div>
          <div className="block-content__detail">
            <span>Duration</span>
            <div className="dot-div"></div>
            <span>30s</span>
          </div>

          <div className="block-content__detail mt-2">
            <span>Open</span>
            <div className="dot-div"></div>
            <span>{round(symbol.open_price.$numberDecimal, 2)}</span>
          </div>
          <div className="block-content__detail">
            <span>Close</span>
            <div className="dot-div"></div>
            <span>{round(symbol.close_price.$numberDecimal, 2)}</span>
          </div>
          <div className="block-content__detail">
            <span>High</span>
            <div className="dot-div"></div>
            <span>{round(symbol.high_price.$numberDecimal, 2)}</span>
          </div>
          <div className="block-content__detail">
            <span>Low</span>
            <div className="dot-div"></div>
            <span>{round(symbol.low_price.$numberDecimal, 2)}</span>
          </div>
        </div>
      )}
    </HistoryItemWrapper>
  );
};
