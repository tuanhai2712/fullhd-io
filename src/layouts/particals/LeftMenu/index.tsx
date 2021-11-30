import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Close } from '@styled-icons/evaicons-solid/Close';
import Icon from '@components/Icon';

import Ranking from './Ranking';
import TradingHistory from './TradingHistory';
import './style.css';

const TagText = styled.p`
  margin-bottom: 0;
  margin-top: -8px;

  @media screen and (max-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: block;
    margin-left: 20px;
  }
`;

const ToggleLeftMenuButton = styled.button`
  display: block;
  position: absolute;
  left: 32px;
  top: -35px;
  outline: none;
  background: transparent;
  border: 1px solid #392de2;
  border-radius: 5px;
  color: #fff;

  &:focus {
    outline: none;
  }

  span {
    width: 20px;
    height: 20px;
    position: relative;
    display: block;

    i,
    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      background-color: #fff;
      left: 0;
    }

    &:before {
      top: 4px;
    }
    i {
      top: 10px;
    }
    &:after {
      top: 16px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const LeftMenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #2a2f55;

  @media (max-width: 767px) {
    background: #14183d;
    position: absolute;
    height: auto;
    width: auto;
    left: 27px;
    z-index: 200;
    ${(props) => (props.showOnMobile ? 'display: block;' : 'display: none;')}
  }

  .navbar {
    padding: 0;

    &:hover {
      cursor: pointer;
      background-color: #2a2f55;
    }

    .navbar-brand {
      color: #c4ccf0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      width: 100%;
      font-size: 14px;
      padding: 7px 0 !important;

      @media (max-width: 767px) {
        padding: 10px 20px !important;
        flex-direction: row;
      }
    }
  }

  .navitem__active {
    background-color: #2a2f55;
    color: #fff;
  }
`;

const TogglePopup = styled.div`
  position: absolute;
  top: 0;
  width: 320px;
  left: 100%;
  padding: 15px;
  color: #fefefe;
  z-index: 10000000;
  background-color: #12183c;

  @media (max-width: 767px) {
    left: auto;
    right: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const ScrollStyled = styled.div`
  height: ${window.outerHeight - 270}px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function LeftMenu() {
  const leftMenuRef: any = useRef();
  const toggleLeftMenuButtonRef: any = useRef();
  const popUpRef: any = useRef();
  const { isDemo } = useSelector((state: globalState) => state.user);
  const history = useHistory();
  const [state, setState] = useState({
    leftMenuHeight: null,
    togglePopup: false,
    id: '/tradingroom',
    title: '',
    showLeftNavOnMobile: false,
  });

  useLayoutEffect(() => {
    document.onreadystatechange = () => {
      setState((state) => ({
        ...state,
        leftMenuHeight: leftMenuRef.current.offsetWidth,
      }));
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ ...state, id: history.location.pathname }));
  }, []);

  // Handle Click outside popup and left menu (on mobile)
  useEffect(() => {
    function handleClickOutside(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        togglePopup();
      }
      if (
        !leftMenuRef.current?.contains(event.target) &&
        !toggleLeftMenuButtonRef.current?.contains(event.target) &&
        !popUpRef.current?.contains(event.target)
      ) {
        closeLeftMenuOnMobile();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popUpRef, leftMenuRef, toggleLeftMenuButtonRef]);

  const ranking = () => {
    setState((state) => ({
      ...state,
      togglePopup: true,
      id: 'Ranking',
      title: 'Ranking',
    }));
  };

  const tradeHistory = () => {
    setState((state) => ({
      ...state,
      togglePopup: true,
      id: 'TradeHistory',
      title: 'History',
    }));
  };

  const menuItem = [
    {
      id: 'Wallet',
      route: '/wallet',
      icon: <Icon name="wallet" />,
      title: 'Wallet',
    },
    {
      id: 'Trading',
      route: '/tradingroom',
      icon: <Icon name="trading" />,
      title: 'Trading',
    },

    {
      id: 'TradeHistory',
      icon: <Icon name="tradinghistory" />,
      title: 'History',
      onClick: tradeHistory,
    },
    {
      id: 'Affiliate',
      route: '/affiliate-link',
      icon: <Icon name="affliatelink" />,
      title: 'Affiliate Link',
    },
    {
      id: 'Commission',
      route: '/commission',
      icon: <Icon name="commission" />,
      title: 'Commission',
    },
    {
      id: 'AI',
      route: '/airobot',
      icon: <Icon name="airobot" />,
      title: 'AI Robot',
    },
    {
      id: 'Matrix',
      route: '/matrix',
      icon: <Icon name="matrix" />,
      title: 'Matrix',
    },
    {
      id: 'Ranking',
      icon: <Icon name="ranking" />,
      title: 'Ranking',
      onClick: ranking,
    },
  ];

  const togglePopup = () =>
    setState((state) => ({
      ...state,
      togglePopup: !state.togglePopup,
      id: '',
    }));

  const goTo = (routes) => {
    setState((state) => ({
      ...state,
      id: routes,
    }));
    return history.push(routes);
  };

  const onNavbarBrandLinkClicked = (item) => () => {
    closeLeftMenuOnMobile();
    goTo(item.route);
  };

  const renderNavbar = (): React.ReactElement[] => {
    const html: React.ReactElement[] = new Array<React.ReactElement>();
    menuItem.map((item, index) => {
      html.push(
        <Navbar variant="dark" key={`navbar_${index}`}>
          {item.route ? (
            <Navbar.Brand
              className={state.id === item.route ? 'navitem__active' : ''}
              onClick={onNavbarBrandLinkClicked(item)}
            >
              {item.icon}
              <TagText>{item.title}</TagText>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand
              className={state.id === item.id ? 'navitem__active' : ''}
              onClick={item.onClick}
            >
              {item.icon}
              <TagText>{item.title}</TagText>
            </Navbar.Brand>
          )}
        </Navbar>
      );
    });
    return html;
  };

  const onToggleLeftMenuButtonClicked = () => {
    setState((state) => ({
      ...state,
      showLeftNavOnMobile: !state.showLeftNavOnMobile,
    }));
  };

  const closeLeftMenuOnMobile = () => {
    if (window.innerWidth < 768) {
      // just handle on mobile
      setState((state) => ({ ...state, showLeftNavOnMobile: false }));
    }
  };

  return (
    <>
      <ToggleLeftMenuButton
        onClick={onToggleLeftMenuButtonClicked}
        ref={toggleLeftMenuButtonRef}
      >
        <span>
          <i></i>
        </span>
      </ToggleLeftMenuButton>
      <LeftMenuWrapper
        className="left-nav"
        ref={leftMenuRef}
        showOnMobile={state.showLeftNavOnMobile}
      >
        {renderNavbar()}
      </LeftMenuWrapper>
      {state.togglePopup ? (
        <TogglePopup ref={popUpRef} alignLeft={state.leftMenuHeight}>
          <Header>
            <Title>{state.title}</Title>
            <Close
              width="30px"
              height="100%"
              onClick={togglePopup}
              style={{ cursor: 'pointer' }}
            />
          </Header>
          <ScrollStyled>
            {state.id === 'Ranking' ? <Ranking /> : null}
            {state.id === 'TradeHistory' ? <TradingHistory /> : null}
          </ScrollStyled>
        </TogglePopup>
      ) : null}
    </>
  );
}
