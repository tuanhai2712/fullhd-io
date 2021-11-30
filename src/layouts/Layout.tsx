import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './particals/Header/Header';
import { useSelector } from 'react-redux';
import SocketProvider from '../../src/components/socket_context';
import CommondApi from '@services/api/CommondApi';
import * as utils from '@utils/utils';
import { useHistory } from 'react-router';
import { socket } from '@utils/sockets';
import { typeEvents } from '@utils/sockets/types';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '@constants/action-types';

const AppContainer = styled.div`
  background-color: #14183d;
  background-position-x: 50%;
  background-size: cover;
  .content {
    position: relative;
    z-index: 0;
  }
`;

const PageContainer = styled.section`
  height: calc(100vh - var(--main-header-height));
  overflow-y: auto;
  @media screen and (max-width: 425px) {
    padding-left: 0;
    &.on-hover {
      padding-left: 0;
    }
  }
`;

const Layout: React.FC = (props) => {
  const history = useHistory();
  const { isDemo } = useSelector((state: globalState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (utils.getStorage('authToken') || utils.getStorage('demoToken')) {
      CommondApi.getUsers()
        .then((result) => {
          if (result.status !== 200) history.push('/login');
          dispatch({
            type: isDemo
              ? ActionTypes.UPDATE_USER_DEMO_INFOR
              : ActionTypes.UPDATE_USER_INFOR,
            payload: result.data,
          });
        })
        .catch(() => history.push('/login'));
    } else history.push('/login');

    /** Check every 25 minutes to refresh the token once */
    const timer = setInterval(() => {
      CommondApi.refreshToken()
        .then((result) => {
          if (result.data.token)
            isDemo
              ? utils.setStorage('demoToken', result.data.token)
              : utils.setStorage('authToken', result.data.token);
        })
        .catch(() => {
          if (socket.connected) socket.disconnect();
          utils.removeStorage('demoToken');
          utils.removeStorage('authToken');
          history.push('/login');
        });
    }, 900000);

    /** socket check if token not valid then logout */
    socket.off(typeEvents.TOKEN_EXPIRED).on(typeEvents.TOKEN_EXPIRED, () => {
      dispatch({ type: ActionTypes.LOGOUT });
    });

    /** exit component then clear interval */
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <SocketProvider>
      <AppContainer>
        <Header />
        <div className="row content">
          <div className="col-md-12">
            <PageContainer>{props.children}</PageContainer>
          </div>
        </div>
      </AppContainer>
    </SocketProvider>
  );
};

export default Layout;
