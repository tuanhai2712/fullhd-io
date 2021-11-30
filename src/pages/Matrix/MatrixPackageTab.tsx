import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MatrixPackageTabStyled } from './style';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { ActionTypes } from '@constants/index';
import * as utils from '@utils/utils';
import UpPackageModal, { PackageStatus } from './UpPackageModal';
import ConfirmWithdrawal from '@components/ConfirmWithdrawal';
import Tooltips from '@components/Tooltips';
import Countdown from 'react-countdown';
import moment from 'moment';
const BalanceCardStyled = styled.div`
  background-image: url('${(props) => props.backgroundUrl}');
  background-position: right;
  border-radius: 17px;
  padding: 21px 42px 26px;
  max-width: calc(50% - 40px);
  margin-right: 30px;
  width: 450px;

  @media (max-width: 767px) {
    max-width: 100%;
    margin-right: 0;
    height: 250px;
    margin-bottom: 20px;
  }

  .title {
    margin-top: 30px;
  }

  .content {
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .button {
    margin-top: 35px;
    font-weight: 600;

    button {
      width: 200px;
      height: 56px;
      max-width: 100%;
    }
  }
`;

const PackageCardStyled = styled.div`
  border-radius: 6px;
  position: relative;

  & > img {
    width: 100%;
  }

  .content {
    position: absolute;
    bottom: 30px;
    text-align: center;
    width: 100%;
  }

  h2,
  h5 {
    font-weight: bold;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
  }

  .upgrade-button {
    position: absolute;
    bottom: -30px;
    width: 100%;

    .btn-open-modal {
      background-color: #17a263;
      border: none;
      outline: none;
      margin: 0 auto;
      width: 80%;
      height: 46px;
      position: relative;
      display: block;

      &.disabled {
        background-color: #3b943f;
      }

      &:not(.disabled):active {
        background-color: #0d6e42;
        border: none;
      }

      & > span {
        flex: 1;
      }

      .icon {
        position: absolute;
        right: 23px;
        top: 15px;
      }
    }

    &.upgraded {
      .btn-open-modal {
        background-color: #57619e;
        pointer-events: none;

        .icon {
          top: 10px;
        }
      }
    }

    &.disabled {
      .btn-open-modal {
        opacity: 0.8;
        pointer-events: none;

        .icon {
          display: none;
        }
      }
    }

    &.unavailable {
      .btn-open-modal {
        background-color: #57619e;
        opacity: 1;
      }
    }
  }
  .timer {
    display: flex;
    justify-content: center;
  }
  .time-countdown {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    .time-unit {
      font-size: 12px;
      margin: -2px;
    }
  }
`;

const GiftCardStyled = styled.div`
  position: relative;

  & > img {
    width: 100%;
  }

  .content {
    position: absolute;
    top: 30%;
    right: 20px;
    width: 50%;

    h4 {
      font-weight: bold;
      font-size: 2vw;
      margin-bottom: 1vw;
    }

    p {
      font-size: 1vw;
      margin-bottom: 3px;
    }
  }
`;

const GiftData = [
  {
    bgUrl: '/matrix/gift-1.png',
    title: 'Iphone 12 Pro Max',
    content: [
      'System reachs $50.000',
      '30F1 activate Matrix $500',
      'One-time bonus',
    ],
  },
  {
    bgUrl: '/matrix/gift-2.png',
    title: 'Surface Book 3',
    content: [
      'System reachs $150.000',
      '50F1 activate Matrix $500',
      'One-time bonus',
    ],
  },
  {
    bgUrl: '/matrix/gift-3.png',
    title: 'Travel',
    content: [
      'System reachs $300.000',
      '70F1 activate Matrix $500',
      'One-time bonus',
    ],
  },
  {
    bgUrl: '/matrix/gift-4.png',
    title: 'Mercedes-Benz E300',
    content: [
      'System reachs $2.000.000',
      '250F1 activate Matrix $500',
      'One-time bonus',
    ],
  },
];

export default function MatrixPackageTab() {
  const dispatch = useDispatch();
  const matrix = useSelector((state: globalState) => state.matrix);
  const { type, status } = useSelector((state: globalState) => state.fetching);
  const { isDemo } = useSelector((state: globalState) => state.user);
  const autoUp = matrix
    ? matrix.matrixInformation.is_auto_upgrade_matrix
    : true;

  const [state, setState] = useState({
    successModalOpen: false,
    modalMessType: -1,
  });

  const modalMess = ['Nothing to withdraw !', 'Withdraw success !'];

  const packagesList = matrix ? matrix.packagesList.allPackages : [];
  const [packList, setPackList] = useState(packagesList);

  let { commission_balance, matrix_withdraw_back } = matrix.matrixInformation;
  let packageDisabled = false;
  const [combalance, setComBalance] = useState(commission_balance);

  const openSuccessModal = (status) => () => {
    setState((state) => ({ ...state, successModalOpen: status }));
  };

  const withdrawal = (password) => {
    if (commission_balance !== 0) {
      dispatch({
        type: ActionTypes.WITHDRAWAL_MATRIX_REQUEST,
        conditions: {},
        commission_balance,
        password,
      });
    }
  };

  const isPackageDisabled = () => {
    if (!packageDisabled) {
      packageDisabled = true;
      return false;
    }
    return true;
  };

  useEffect(() => {
    setComBalance(commission_balance);
    setPackList(packagesList);
  }, [autoUp, commission_balance, packagesList]);

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_ALL_PACKAGE,
    });
    dispatch({
      type: ActionTypes.GET_MATRIX_INFORMATION_OF_USER,
      conditions: {},
    });
  }, [matrix.upgradePackage]);

  const renderer = ({ hours, minutes, seconds, days }) => {
    return (
      <div className="timer">
        <div className="time-countdown">
          <span>{days}</span>
          <span className="time-unit">days</span>
        </div>
        <div className="time-countdown">
          <span>{hours}</span>
          <span className="time-unit">hrs</span>
        </div>
        <div className="time-countdown">
          <span>{minutes}</span>
          <span className="time-unit">mins</span>
        </div>
        <div className="time-countdown">
          <span>{seconds}</span>
          <span className="time-unit">sec</span>
        </div>
      </div>
    );
  };
  return (
    <MatrixPackageTabStyled>
      <div className="balance-cards d-block d-md-flex">
        <BalanceCardStyled backgroundUrl={'/matrix/balance-bg.png'}>
          <div className="title sub-text">
            <span>Balance (2% of withdrawal)</span>
          </div>
          <div className="content">
            <span>{`${
              utils.formatter.format(matrix_withdraw_back) || 0
            } USDT`}</span>
          </div>
        </BalanceCardStyled>
        <BalanceCardStyled backgroundUrl={'/matrix/commission-bg.png'}>
          <div className="title sub-text">
            <span>Commission balance</span>
          </div>
          <div className="content">
            <span>{`${utils.formatter.format(combalance) || 0} USDT`}</span>
          </div>
          <div className="button">
            {isDemo ? (
              <Tooltips
                name="withdrawal"
                message=" Demo accounts cannot perform this action"
                placement="left"
              >
                <span className="d-inline-block" style={{ width: '100%' }}>
                  <ConfirmWithdrawal
                    confirm={(password) => withdrawal(password)}
                    disabled
                    fetching={
                      type === ActionTypes.WITHDRAWAL_MATRIX_REQUEST && status
                    }
                    success={
                      type === ActionTypes.WITHDRAWAL_MATRIX_SUCCESS && !status
                    }
                  >
                    Withdrawal
                  </ConfirmWithdrawal>
                </span>
              </Tooltips>
            ) : (
              <ConfirmWithdrawal
                confirm={(password) => withdrawal(password)}
                fetching={
                  type === ActionTypes.WITHDRAWAL_MATRIX_REQUEST && status
                }
                success={
                  type === ActionTypes.WITHDRAWAL_MATRIX_SUCCESS && !status
                }
              >
                Withdrawal
              </ConfirmWithdrawal>
            )}
          </div>
        </BalanceCardStyled>
      </div>
      <div className="packages">
        <div className="info">
          <p className="sub-text">
            Upgrade Matrix packages to earn more profit from your system
          </p>
          <div className="check-box"></div>
          <Modal show={state.successModalOpen} onHide={openSuccessModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{modalMess[state.modalMessType]}</p>
            </Modal.Body>
          </Modal>
        </div>
        <div className="package-cards">
          <Row>
            {packList.map((packageValue, index) => {
              const openTime =
                packageValue.openAt &&
                !moment(packageValue.openAt).isBefore(moment()) &&
                moment(packageValue.openAt).format('x');
              return (
                <Col
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                  className="package"
                  key={index}
                >
                  <PackageCardStyled>
                    <img
                      src={`/matrix/package-${index + 1}.png`}
                      alt={`Matrix Package ${index + 1}`}
                    />
                    <div className="content">
                      <h5>{packageValue.name}</h5>
                      <h2>
                        <span>{`$ ${packageValue.amount}`}</span>
                      </h2>
                    </div>
                    <div
                      className={`upgrade-button
                      ${packageValue.isBought ? 'upgraded' : ''}
                      ${
                        !packageValue.isBought && isPackageDisabled()
                          ? 'disabled'
                          : ''
                      }
                      ${!packageValue.available ? 'unavailable' : ''}
                    `}
                    >
                      {openTime ? (
                        <button
                          className="btn-open-modal btn btn-primary"
                          style={{
                            padding: '0px',
                            backgroundColor: '#000 ',
                            opacity: '0.8',
                          }}
                        >
                          <Countdown
                            date={parseInt(openTime)}
                            renderer={renderer}
                          />
                        </button>
                      ) : (
                        <UpPackageModal
                          packageValue={{ ...packageValue, id: index + 1 }}
                          packageStatus={
                            packageValue.isBought
                              ? PackageStatus.UPGRADED
                              : packageValue.available
                              ? PackageStatus.AVAILABLE
                              : PackageStatus.UNAVAILABLE
                          }
                          idPackage={packageValue._id}
                        />
                      )}
                    </div>
                  </PackageCardStyled>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="gifts">
        <h3>Gift</h3>
        <Row>
          {GiftData.map((item, index) => (
            <Col md={6} className="mb-4" key={index}>
              <GiftCardStyled>
                <img src={item.bgUrl} alt={item.title} />
                <div className="content">
                  <h4>{item.title}</h4>
                  {item.content.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </GiftCardStyled>
            </Col>
          ))}
        </Row>
      </div>
    </MatrixPackageTabStyled>
  );
}
