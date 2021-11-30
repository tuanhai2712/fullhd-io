import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Button } from 'react-bootstrap';
import {
  HeaderStyled,
  ActiveLinksContainer,
  ToggleActiveLinksButton,
  ActiveLinksWrapper,
  DropdownSubMenuStyled
} from './style';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { FiberManualRecord } from '@styled-icons/material-outlined/FiberManualRecord';
import { Ellipse } from '@styled-icons/ionicons-solid/Ellipse';
import { CaretForward } from '@styled-icons/ionicons-outline/CaretForward';
import { useHistory } from 'react-router-dom';
import { ActionTypes } from '@constants/index';
import { Loop } from '@styled-icons/material/Loop';
import '@material/react-drawer/dist/drawer.css';
import DrawerProfile from './DrawerProfile';
import Icon from '@components/Icon';
import * as utils from '@utils/utils';
import Tooltips from '@components/Tooltips';
import { Info } from '@styled-icons/evaicons-solid/Info';
import CommondApi from '@services/api/CommondApi';

type HeaderProps = {
  isHome?: boolean;
};

const Header = ({ isHome }: HeaderProps) => {
  const activeLinksRef: any = useRef();
  const toggleActiveLinksButtonRef: any = useRef();
  const { userInfo, userDemoInfo, isDemo } = useSelector(
    (state: globalState) => state.user
  );
  const { bonusMoney } = useSelector((state: globalState) => state.profile);

  const { level } = useSelector((state: globalState) => state.profile);
  const [isLogin, setIsLogin] = useState('');
  const [open, setOpen] = useState(false);
  const [isShowActiveLinks, setIsShowActiveLinks] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { username, is_ib } = userInfo;

  useEffect(() => {
    const checkLogin = isDemo
      ? utils.getStorage('demoToken') || ''
      : utils.getStorage('authToken') || '';
    setIsLogin(checkLogin);
    if (utils.getStorage('authToken')) {
      dispatch({
        type: ActionTypes.GET_USER_PROFILE_REQUEST
      });
      // dispatch({
      //   type: ActionTypes.GET_BONUS_STATUS_REQUEST,
      // });
    }
  }, [utils.getStorage('demoToken'), utils.getStorage('authToken')]);

  useEffect(() => {
    if (utils.getStorage('authToken') || utils.getStorage('demoToken')) {
      CommondApi.getUsers()
        .then(result => {
          if (result.status !== 200) history.push('/login');
          dispatch({
            type: isDemo
              ? ActionTypes.UPDATE_USER_DEMO_INFOR
              : ActionTypes.UPDATE_USER_INFOR,
            payload: result.data
          });
        })
        .catch(error => console.log(error));
    }
  }, []);

  const switchAccount = typeAccount => {
    if (
      (typeAccount === 'demo' && !isDemo) ||
      (typeAccount === 'real' && isDemo)
    ) {
      setOpen(false);
      dispatch({
        type: ActionTypes.SWITCH_ACCOUNT_REQUEST,
        payload: {
          history
        }
      });
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  };

  const refreshDemoMoney = () => {
    dispatch({
      type: ActionTypes.ADD_DEMO_MONEY
    });
    setTimeout(function() {
      window.location.reload();
    }, 1000);
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  const goToHome = () => {
    history.push('/home');
  };

  const goToWallet = () => {
    history.push('/wallet');
  };

  const balance = amount => {
    if (amount) {
      return utils.formatter.format(amount); //Math.round(amount * 1000) / 1000;
    }
    return 0;
  };

  const onToggleActiveLinksButtonClicked = () => {
    setIsShowActiveLinks(!isShowActiveLinks);
  };

  const closeActiveLinksOnMobile = () => {
    if (window.innerWidth < 992) {
      setIsShowActiveLinks(false);
    }
  };

  // Handle Click outside popup and left menu (on mobile)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !activeLinksRef.current?.contains(event.target) &&
        !toggleActiveLinksButtonRef.current?.contains(event.target)
      ) {
        closeActiveLinksOnMobile();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeLinksRef, toggleActiveLinksButtonRef]);
  return (
    <HeaderStyled>
      <header>
        <div className="top-nav">
          <div className="logo">
            <img src="/logo.png" alt="Home Logo" onClick={() => goToHome()} />
          </div>
          <div className="nav">
            {isHome && (
              <>
                <ActiveLinksContainer>
                  <ToggleActiveLinksButton
                    onClick={onToggleActiveLinksButtonClicked}
                    ref={toggleActiveLinksButtonRef}
                  >
                    <span>
                      <i></i>
                    </span>
                  </ToggleActiveLinksButton>
                  <ActiveLinksWrapper
                    ref={activeLinksRef}
                    showOnMobile={isShowActiveLinks}
                  >
                    <DropdownSubMenuStyled>
                      <div className="dropdown">
                        <div className="about-us-menu">
                          <a href="#">About us</a>
                          <div className="dropdown-content">
                            <div className="sub-menu-item">
                              <a href="/about-us/overview">
                                Overview Ecosystem
                              </a>
                              <a href="/about-us/binary-option">
                                FullHD
                              </a>
                              <a href="/about-us/introduction-ai">AI ROBOT</a>
                              <a href="/about-us/matrix">Matrix</a>
                              <a href="/copy-trading/login">Copy Trade</a>
                              <a href="/#">Coin</a>
                              <a href="/#">Game</a>
                            </div>
                          </div>
                          <CaretForward />
                        </div>
                      </div>
                      <a target="_blank" href="/White paper.pdf">
                        White paper
                      </a>
                    </DropdownSubMenuStyled>

                    {/* <a href="/overview">About us</a> */}
                  </ActiveLinksWrapper>
                </ActiveLinksContainer>
              </>
            )}
            {isLogin !== '' ? (
              <>
                <div className="d-none d-md-flex">
                  <div className="button-is-login">
                    <button
                      className="btn-deposite"
                      onClick={() => goToWallet()}
                    >
                      <Icon name="deposite" />
                      Deposit
                    </button>
                  </div>
                  {is_ib && (
                    <>
                      <div className="is-ib">
                        <span className="level">Level</span>
                        <span className="num">{level}</span>
                      </div>
                      <div className="is-ib">
                        <span>IB</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="d-flex">
                  <div className="account">
                    <span className="type">
                      {isDemo ? 'Demo Account' : 'Real Account'}
                    </span>
                    <span className="money">{`$ ${balance(
                      isDemo ? userDemoInfo.amount : userInfo.amount
                    )}`}</span>
                    {bonusMoney !== 0 ? (
                      <span className="bonus-money">{`Bonus: $ ${balance(
                        bonusMoney || 0
                      )}`}</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="hd-dropdown switch-account-dropdown">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <Icon name="dropdown" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>My Balance</Dropdown.Header>
                        <Dropdown.Item
                          className="item-account"
                          onClick={() => switchAccount('real')}
                        >
                          {isDemo ? (
                            <FiberManualRecord />
                          ) : (
                            <Ellipse className="icon-active" />
                          )}
                          <div className="right-item">
                            <p>Real Account</p>
                            <span className="real-text">{`$ ${balance(
                              userInfo.amount
                            )}`}</span>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="item-account"
                          onClick={() => switchAccount('demo')}
                        >
                          {!isDemo ? (
                            <FiberManualRecord />
                          ) : (
                            <Ellipse className="icon-active" />
                          )}
                          <div className="right-item">
                            <p>Demo Account</p>
                            <span className="demo-text">{`$ ${balance(
                              userDemoInfo.amount
                            )}`}</span>
                          </div>
                          {isDemo ? (
                            <button
                              disabled={!isDemo}
                              className="refresh-money"
                              onClick={() => refreshDemoMoney()}
                            >
                              <Loop />
                            </button>
                          ) : (
                            <Tooltips
                              name="refresh-balanc-demo-account"
                              message="You need to switch to a demo account first"
                            >
                              <Info width="15" />
                            </Tooltips>
                          )}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                {/* <div className="notification">
                  <Icon name="notification" />
                  <span>Notification</span>
                </div> */}
                <Button onClick={() => setOpen(!open)} className="profile-btn">
                  <span className="avatar">{username?.charAt(0)}</span>
                  <span className="username">{username}</span>
                  <MoreHoriz />
                </Button>
              </>
            ) : (
              <div className="button-is-logout">
                <button onClick={goToRegister}>Sign up</button>
                <button onClick={goToLogin}>Login</button>
              </div>
            )}
          </div>
        </div>
      </header>
      {isLogin && (
        <DrawerProfile open={open} setOpen={status => setOpen(status)} />
      )}
    </HeaderStyled>
  );
};

export default Header;
