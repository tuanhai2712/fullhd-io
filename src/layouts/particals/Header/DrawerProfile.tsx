import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import {
  DrawerStyled,
  DrawerScrollStyled,
  DrawerProfileSettingsStyled,
} from './style';
import { AttachMoney } from '@styled-icons/material/AttachMoney';
import { Info } from '@styled-icons/evaicons-solid/Info';
import { Close } from '@styled-icons/material/Close';
import { Settings } from '@styled-icons/material/Settings';
import { ExitToApp } from '@styled-icons/material/ExitToApp';
import { Lock } from '@styled-icons/material/Lock';
import { Security } from '@styled-icons/material/Security';
import Drawer, { DrawerHeader, DrawerContent } from '@material/react-drawer';
import '@material/react-drawer/dist/drawer.css';
import DrawerProfileSettings from './DrawerProfileSettings';
import DrawerSecurity from './DrawerSecurity';
import DrawerChangePassword from './DrawerChangePassword';
import { useHistory } from 'react-router-dom';
import { formatter } from '@utils/utils';
import Tooltips from '@components/Tooltips';
import { socket } from '@utils/sockets';
import { ActionTypes } from '@constants/index';

type DrawerProfileProps = {
  open: boolean;
  setOpen: any;
};
export default function DrawerProfile({ open, setOpen }: DrawerProfileProps) {
  const profilePopUpRef: any = useRef();
  const { userInfo, isDemo } = useSelector((state: globalState) => state.user);
  const {
    level,
    totalChild,
    totalF1Child,
    totalCommission,
    commissionNotWithdrawal,
    ibCommissionNotWithdrawal,
    userRanking,
  } = useSelector((state: globalState) => state.profile);
  const { username } = userInfo;
  const [page, setPage] = useState('main');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (open) {
      setPage('main');
      dispatch({
        type: ActionTypes.GET_USER_PROFILE_REQUEST,
      });
    }
  }, [open]);

  // Handle Click outside popup
  useEffect(() => {
    function handleClickOutsidePopUp(event) {
      if (
        profilePopUpRef.current &&
        !profilePopUpRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutsidePopUp);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePopUp);
    };
  }, [profilePopUpRef]);

  const logout = () => {
    dispatch({
      type: ActionTypes.LOGOUT,
    });
    setOpen(false);
    socket.disconnect();
    history.push('/home');
  };

  const renderContent = () => {
    switch (page) {
      case 'settings':
        return (
          <DrawerProfileSettings
            back={() => setPage('main')}
            close={() => setOpen(false)}
          />
        );
      case 'security':
        return (
          <DrawerSecurity
            back={() => setPage('main')}
            close={() => setOpen(false)}
          />
        );
      case 'password':
        return (
          <DrawerChangePassword
            back={() => setPage('main')}
            close={() => setOpen(false)}
          />
        );
      default:
        return (
          <>
            <DrawerHeader>
              <div className="drawer-header">
                <span>Profile</span>
                <Button onClick={() => setOpen(!open)}>
                  <Close />
                </Button>
              </div>
            </DrawerHeader>
            <DrawerScrollStyled>
              <DrawerContent className="drawer-content">
                <div className="drawer-content-header">
                  <div className="drawer-info-content">
                    <span className="info-email">{username}</span>
                    <span>Ranking: #{userRanking}</span>
                  </div>
                  <div className="avatar">
                    <span>{username?.charAt(0)}</span>
                  </div>
                </div>
                <div className="drawer-card-content">
                  <span className="title-main-content">Balance</span>
                  <div className="value">
                    <AttachMoney />
                    <p>{formatter.format(userInfo.amount)}</p>
                  </div>
                </div>
                <div className="drawer-card-commission">
                  <div className="total">
                    <span className="title d-flex">
                      Total Commission
                      <Tooltips
                        name="commision"
                        message="Total Commission = IB commission + Volume commission + AI commission + AI profit + Matrix commission"
                      >
                        <Info style={{ marginLeft: 10 }} width="15" />
                      </Tooltips>
                    </span>
                    <div className="value">
                      <AttachMoney />
                      <p>
                        {formatter.format(
                          totalCommission +
                            commissionNotWithdrawal +
                            ibCommissionNotWithdrawal
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="level">
                    <span className="text">Level</span>
                    <span className="num">{level}</span>
                  </div>
                  <div></div>
                </div>
                <div className="drawer-card-content">
                  <span className="title-main-content">Agency</span>
                  <p>{totalF1Child}</p>
                </div>
                <div className="drawer-card-content">
                  <span className="title-main-content">All Members</span>
                  <p>{totalChild}</p>
                </div>
                <div className="drawer-footer">
                  <ButtonGroup>
                    <button
                      className="btn-footer"
                      onClick={() => setPage('security')}
                      disabled={isDemo}
                    >
                      <Security />
                      <span>Security</span>
                    </button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <button
                      className="btn-footer"
                      onClick={() => setPage('settings')}
                      disabled={isDemo}
                    >
                      <Settings />
                      <span>Profile settings</span>
                    </button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <button
                      className="btn-footer"
                      onClick={() => setPage('password')}
                      disabled={isDemo}
                    >
                      <Lock />
                      <span>Change password</span>
                    </button>
                  </ButtonGroup>
                  <ButtonGroup className="logout">
                    <button onClick={() => logout()}>
                      <ExitToApp /> <span>Log Out</span>
                    </button>
                  </ButtonGroup>
                </div>
              </DrawerContent>
            </DrawerScrollStyled>
          </>
        );
    }
  };
  return (
    <DrawerStyled ref={profilePopUpRef}>
      <DrawerProfileSettingsStyled>
        <Drawer
          dismissible
          open={open}
          className={open ? 'mdc-drawer-right-open' : 'mdc-drawer-right-close'}
        >
          {renderContent()}
        </Drawer>
      </DrawerProfileSettingsStyled>
    </DrawerStyled>
  );
}
