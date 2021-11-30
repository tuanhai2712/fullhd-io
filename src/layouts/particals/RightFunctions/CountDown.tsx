import React, { useContext } from 'react';
import CountdownIcon from '../svg/Countdown';
import styled from 'styled-components';
import SocketContext from '../../../components/socket_context/context';

const CountDownWrapper = styled.div`
  margin-top: 30px;
  text-align: center;

  @media (max-width: 767px) {
    flex: 0 0 calc(100% / 3 - 5px);
    margin-top: 16px;
    margin-left: 10px;
    order: 2;
  }

  .description {
    font-size: 18px;
    color: #fff;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .timer {
    margin-top: 15px;
    position: relative;
    margin: 0 auto;
    width: 77px;
    height: 77px;

    .timer-countdown {
      position: absolute;
      width: 77px;
      height: 77px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }

    @media (max-width: 767px) {
      width: 50px;
      height: 50px;

      .timer-countdown {
        width: 50px;
        height: 50px;
        font-size: 20px;
      }
    }
  }
`;

const CountDown = () => {
  const { tick, isOpen } = useContext(SocketContext);

  return (
    <CountDownWrapper>
      <p className="description">{isOpen ? 'Please trade' : 'Waiting'}</p>
      <div className="timer">
        <CountdownIcon isOpen={isOpen} />
        <span
          className="timer-countdown"
          style={{ color: isOpen === true ? '#2cac40' : '#db4931' }}
        >
          {tick}
        </span>
      </div>
    </CountDownWrapper>
  );
};

export default React.memo(CountDown);
