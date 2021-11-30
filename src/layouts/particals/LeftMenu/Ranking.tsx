import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TradingApi from '@services/api/TradingApi';

const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-ranking {
    width: 100%;
    font-size: 14px;
    color: #eaa523;
  }

  .ranking-item {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    background-color: #222e4e;
    border-radius: 10px;
    width: 100%;
    min-height: 60px;
    -webkit-animation: conditionalOpen 0.5s normal forwards ease-in-out;
    -moz-animation: conditionalOpen 0.5s normal forwards ease-in-out;
    animation: conditionalOpen 0.5s normal forwards ease-in-out;
    -webkit-transform-origin: 50% 0%;
    -moz-transform-origin: 50% 0%;
    transform-origin: 50% 0%;

    &__level {
      text-align: center;
      font-size: 16px;
      width: 30px;
    }

    &__username {
      flex: 1;
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
  }
`;

export default function Ranking() {
  const user = useSelector((state: globalState) => state.user);
  const [state, setState] = useState({
    myRating: '#',
    myVolume: 0,
    pageNumber: 0,
    pageSize: 50,
    rankingData: [],
  });

  useEffect(() => {
    TradingApi.getUseRanking().then((result) => {
      setState((state) => ({
        ...state,
        myRating: result.data.rank === 0 ? '# 0' : `# ${result.data.rank}`,
        myVolume: result.data.volume,
      }));
    });
  }, []);

  useEffect(() => {
    TradingApi.getRanking(
      state.pageNumber * state.pageSize,
      state.pageSize
    ).then((result) => {
      setState((state) => ({
        ...state,
        rankingData: state.rankingData.concat(result.data.data),
      }));
    });
  }, [state.pageNumber]);

  const loadMore = () => {
    setState((state) => ({ ...state, pageNumber: state.pageNumber + 1 }));
  };

  const renderRankingIcon = (idx) => {
    switch (idx) {
      case 0:
        return <img src="/img/r1.png" alt="Rank" style={{ width: '25px' }} />;
      case 1:
        return <img src="/img/r2.png" alt="Rank" style={{ width: '25px' }} />;
      case 2:
        return <img src="/img/r3.png" alt="Rank" style={{ width: '25px' }} />;
      case 3:
        return <img src="/img/r4.png" alt="Rank" style={{ width: '25px' }} />;
      case 4:
        return <img src="/img/r5.png" alt="Rank" style={{ width: '25px' }} />;
      default:
        return <span className="ranking-text">{idx + 1}</span>;
    }
  };
  return (
    <RankingWrapper>
      <div className="user-ranking">
        <div>{user.userInfo.email}</div>
        <div className="d-flex align-items-center justify-content-between">
          <p>{state.myRating}</p>
          <p className={state.myVolume >= 0 ? 'text-success' : 'text-danger'}>
            ${state.myVolume}
          </p>
        </div>
      </div>

      {state.rankingData.length === 0 && (
        <p className="text-center text-muted">
          You have made no profitable trades this week yet.
        </p>
      )}

      {state.rankingData.map((item: any, index) => (
        <div key={`ranking${index}`} className="ranking-item">
          <div className="ranking-item__level">{renderRankingIcon(index)}</div>
          <div className="ranking-item__username">
            <span className="ml-2">{item.username}</span>
          </div>
          <div className="ranking-item__money">
            <span className="text-success">$ {item.volume}</span>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={loadMore}>
        Load more
        </button>
    </RankingWrapper>
  );
}
