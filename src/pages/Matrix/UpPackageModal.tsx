import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ActionTypes, UpPackageSelect } from '@constants/index';
import {
  UpgradePackageModalStyled,
  RadioContainer,
  SuccessUpgradedModalStyled
} from './style';
import { useHistory } from 'react-router';
import Tooltips from '@components/Tooltips';
export enum PackageStatus {
  AVAILABLE = 'available',
  UPGRADED = 'upgraded',
  UNAVAILABLE = 'unavailable'
}

type UpPackageModalProps = {
  packageValue: any;
  packageStatus?: PackageStatus;
  idPackage: string;
};

export default function UpPackageModal({
  packageValue,
  packageStatus,
  idPackage
}: UpPackageModalProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isDemo, userInfo } = useSelector((state: globalState) => state.user);
  const { amount } = userInfo;
  const { matrix_withdraw_back } = useSelector(
    (state: globalState) => state.matrix.matrixInformation
  );
  const [state, setState] = useState({
    option: 2,
    open: false,
    successModalOpen: false,
    modalMessType: -1,
    errorMessage: ''
  });

  const modalMess = [
    'Not enough money to buy this package !',
    'Cannot buy this package, please buy sequentially!',
    'Buy package success!'
  ];
  const matrix = useSelector((state: globalState) => state.matrix);

  const selectOption = option => () => {
    if (state.option !== option)
      setState(state => ({ ...state, option: option }));
  };

  const calculateAmount = () => {
    const amountRemain =
      state.option === 0
        ? matrix_withdraw_back - packageValue.amount
        : state.option === 1
        ? amount - packageValue.amount
        : state.option === 2
        ? matrix_withdraw_back > packageValue.amount
          ? amount
          : amount + matrix_withdraw_back - packageValue.amount
        : 0;
    return amountRemain;
  };

  const upgradePackage = () => {
    const moneyToUse =
      state.option === 0
        ? matrix_withdraw_back
        : state.option === 1
        ? amount
        : state.option === 2
        ? amount + matrix_withdraw_back
        : 0;

    if (moneyToUse >= packageValue.amount) {
      dispatch({
        type: ActionTypes.UPGRADE_PACKAGE,
        conditions: {
          matrixPackage: packageValue.amount,
          option: state.option,
          idPackage
        }
      });

      dispatch({
        type: ActionTypes.UPDATE_USER_INFOR,
        payload: { amount: calculateAmount() }
      });
      setState(state => ({
        ...state,
        open: false,
        successModalOpen: true,
        modalMessType: 2
      })); // Close main modal, open success modal
    } else {
      setState(state => ({ ...state, errorMessage: modalMess[0] }));
    }
  };

  const openModal = status => () => {
    setState(state => ({ ...state, open: status, errorMessage: '' }));
  };

  const openSuccessModal = status => () => {
    setState(state => ({ ...state, successModalOpen: status }));
  };

  const getPackageStatus = useMemo(() => {
    switch (packageStatus) {
      case PackageStatus.UPGRADED:
        return { text: 'UPGRADED', icon: '/img/icons/layout/upgraded.png' };
      case PackageStatus.AVAILABLE:
        return { text: 'UPGRADE', icon: '/img/icons/layout/arrow-up.png' };
      default:
        return { text: 'UNAVAILABLE' };
    }
  }, [packageStatus]);

  return (
    <>
      {isDemo ? (
        <Tooltips
          name="buyIB"
          message=" Demo accounts cannot perform this action"
        >
          <span className="d-inline-block" style={{ width: '100%' }}>
            <Button
              style={{ pointerEvents: 'none' }}
              disabled
              className="btn-open-modal"
            >
              <span>{getPackageStatus?.text}</span>
              {getPackageStatus?.icon && (
                <img
                  className="icon"
                  src={getPackageStatus.icon}
                  alt={getPackageStatus?.text}
                />
              )}
            </Button>
          </span>
        </Tooltips>
      ) : (
        <Button onClick={openModal(true)} className="btn-open-modal">
          <span>{getPackageStatus?.text}</span>
          {getPackageStatus?.icon && (
            <img
              className="icon"
              src={getPackageStatus.icon}
              alt={getPackageStatus?.text}
            />
          )}
        </Button>
      )}

      <Modal show={state.open} onHide={openModal(false)}>
        <UpgradePackageModalStyled>
          <Modal.Header closeButton>
            <Modal.Title>Upgrade Package</Modal.Title>
          </Modal.Header>
          {/* <Modal.Header>
            <Modal.Title>{`2% balance: ${matrix.matrixInformation.matrix_withdraw_back}$`}</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="package">
              <h3>Your Package</h3>
              <div className="logo">
                <img
                  src={`/matrix/pack-${packageValue.id}.png`}
                  alt={packageValue.name}
                />
                <div className="content">
                  <h5>{packageValue.name}</h5>
                  <h4>{`$${packageValue.amount}`}</h4>
                </div>
              </div>
            </div>
            <div className="payment">
              <h3>Payment via</h3>
              <RadioContainer>
                <div className="radio-container">
                  <input
                    id="account"
                    checked={state.option === UpPackageSelect.use_account_money}
                    value={UpPackageSelect.use_account_money}
                    type="radio"
                    onChange={selectOption(UpPackageSelect.use_account_money)}
                  />
                  <label htmlFor="account">Account money</label>
                </div>
                <div className="radio-container">
                  <input
                    id="balance"
                    checked={state.option === UpPackageSelect.use_excess_money}
                    value={UpPackageSelect.use_excess_money}
                    type="radio"
                    onChange={selectOption(UpPackageSelect.use_excess_money)}
                  />
                  <label htmlFor="balance">
                    Your balance (2% of withdrawal)
                  </label>
                </div>
                <div className="radio-container">
                  <input
                    id="both"
                    checked={
                      state.option ===
                      UpPackageSelect.use_your_balance_and_account_money
                    }
                    value={UpPackageSelect.use_your_balance_and_account_money}
                    type="radio"
                    onChange={selectOption(
                      UpPackageSelect.use_your_balance_and_account_money
                    )}
                  />
                  <label htmlFor="both">Both</label>
                </div>
                {state.errorMessage && (
                  <p className="error-message">{state.errorMessage}</p>
                )}
                <div className="button-container">
                  <Button onClick={upgradePackage}>Upgrade</Button>
                </div>
              </RadioContainer>
            </div>
          </Modal.Body>
        </UpgradePackageModalStyled>
      </Modal>
      <Modal
        show={state.successModalOpen}
        onHide={openSuccessModal(false)}
        className="mt-5"
        dialogClassName="mt-5"
      >
        <SuccessUpgradedModalStyled packageId={packageValue.id}>
          <Modal.Body>
            <div className="logo">
              <h3>Upgraded Success</h3>
              <h5>{packageValue.name}</h5>
              <p>Your package now</p>
            </div>
            <p>Your package was upgraded, you can see detail in Matrix page</p>
            <Button onClick={openSuccessModal(false)}>Close</Button>
          </Modal.Body>
        </SuccessUpgradedModalStyled>
      </Modal>
    </>
  );
}
