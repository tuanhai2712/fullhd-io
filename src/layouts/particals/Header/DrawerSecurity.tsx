import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
import { ActionTypes } from '@constants/index';
import { DrawerScrollStyled } from './style';
import { Close } from '@styled-icons/material/Close';
import { ArrowBackIos } from '@styled-icons/material/ArrowBackIos';
import { DrawerHeader, DrawerContent } from '@material/react-drawer';
import '@material/react-drawer/dist/drawer.css';
import Icon from '@components/Icon';
import QRCode from './QRCode';

type DrawerSecurityProps = {
  back: any;
  close: any;
};
export default function DrawerSecurity({ back, close }: DrawerSecurityProps) {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const enableTFAResult = useSelector((state: globalState) => state.tfa);
  const fetching = useSelector((state: globalState) => state.fetching);
  const { type, status } = fetching;
  const dispatch = useDispatch();
  const { is_tfa_enabled } = userInfo;

  useEffect(() => {
    dispatch({
      type: ActionTypes.CLEAR_TFA_DATA,
    });
  }, []);

  const enableTFA = () => {
    dispatch({
      type: !is_tfa_enabled
        ? ActionTypes.ENABLE_TFA_REQUEST
        : ActionTypes.DISABLE_TFA_REQUEST,
    });
  };

  const renderIconSecurity = () => {
    if (is_tfa_enabled) {
      return <Icon size={16} color="#2f844c" name="check" />;
    }
    return <Icon size={16} color="#dc3545" name="close" />;
  };

  const renderQRCode = () => {
    if (
      (type === ActionTypes.ENABLE_TFA_REQUEST ||
        type === ActionTypes.DISABLE_TFA_REQUEST ||
        type === ActionTypes.CONFIRM_VERIFY_CODE_REQUEST) &&
      status
    ) {
      return (
        <div className="loading">
          <Spinner animation="border" color="primary" />
        </div>
      );
    }
    if (enableTFAResult.qrCode && enableTFAResult.secret_code) {
      return <QRCode />;
    }
  };
  return (
    <>
      <DrawerHeader>
        <div className="drawer-header">
          <Button className="back-btn" onClick={() => back()}>
            <ArrowBackIos />
            <span>Back</span>
          </Button>
          <Button onClick={() => close()}>
            <Close />
          </Button>
        </div>
      </DrawerHeader>
      <DrawerContent className="drawer-content">
        <DrawerScrollStyled>
          <p className="title">Security</p>
          <div
            className="security-mess"
            style={{ backgroundColor: is_tfa_enabled ? '#28a980' : '#ffa940' }}
          >
            <p className="label">Account security level</p>
            <p className="title"> {is_tfa_enabled ? 'High' : 'Medium'}</p>
            <p>
              For a security upgrade, please enable two-factor authentication
            </p>
          </div>
          <div className="security">
            <p className="title-item">Information</p>
            <div className="security-card">
              {renderIconSecurity()}
              <div className="content">
                <div className="desc">
                  <p className="title">Two-Factor authentication</p>
                  <p className="sub-title">Enhance your security</p>
                </div>
                <div className="active">
                  <Button
                    onClick={() => enableTFA()}
                    variant={is_tfa_enabled ? 'danger' : 'success'}
                  >
                    {is_tfa_enabled ? 'Disable' : 'Enable'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {renderQRCode()}
        </DrawerScrollStyled>
      </DrawerContent>
    </>
  );
}
