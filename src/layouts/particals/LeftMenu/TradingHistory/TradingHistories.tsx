import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import moment from 'moment';
import { ActionTypes } from '@constants/action-types';

import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'react-bootstrap/Spinner';

const StyledTradingHistoriesWrapper = styled.div`
  height: 700px;
  overflow: auto;
`;

const TradingHistories: React.FC<{ onHoverItem: Function }> = ({
  onHoverItem
}) => {
  const dispatch = useDispatch();
  const [historiesPayload, setHistoriesPayload] = useState({
    limit: 16,
    start: 0
  });

  const tradingHistories = useSelector(
    (state: globalState) => state.trading.tradingHistories
  );

  useEffect(() => {
    dispatch({
      type: ActionTypes.TRADING_GET_HISTORIES,
      payload: {
        ...historiesPayload
      }
    });
  }, [historiesPayload]);

  const fetchMoreTradingHistories = () => {
    setHistoriesPayload({
      ...historiesPayload,
      start: tradingHistories.data.length + 1
    });
  };

  return (
    <>
      {!tradingHistories.data && <Spinner animation="border" />}
      {tradingHistories.data && (
        <StyledTradingHistoriesWrapper id="scrollableTradingHistories">
          <InfiniteScroll
            dataLength={tradingHistories.data.length}
            next={fetchMoreTradingHistories}
            hasMore={tradingHistories.hasMore}
            loader={<Spinner animation="border" />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            scrollableTarget="scrollableTradingHistories"
          >
            {tradingHistories.data.map((history, index) => (
              <div
                key={`toggle-history-item-${history.time}-${index}`}
                onMouseEnter={e =>
                  onHoverItem(
                    `${(e.currentTarget as HTMLDivElement).offsetTop}px`
                  )
                }
                onMouseLeave={() => onHoverItem('')}
                className="trading-history__item"
              >
                <div className="trading-history__item__time">
                  <span>{moment(history.createdAt).format('LT')}</span>
                  <span className="text-muted">
                    {moment(history.createdAt).subtract(1, "minutes").format('MMM')}{' '}
                    {moment(history.createdAt).format('D')}
                  </span>
                </div>
                <div className="trading-history__item__info">
                  <span>USD/USD</span>
                </div>
                <div className="trading-history__item__price">
                  <span
                    className={
                      history.type === 0 ? 'text-success' : 'text-danger'
                    }
                  >
                    {history.type === 0 ? '+' : '-'}
                    {history.amount}$
                  </span>
                  <span className="text-muted">{history.amount}$</span>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </StyledTradingHistoriesWrapper>
      )}
    </>
  );
};

export default TradingHistories;
