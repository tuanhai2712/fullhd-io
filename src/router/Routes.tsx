import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import * as routerHelpers from './RouterHelpers';
import LayoutComponent from '@layouts/Layout';
import LayoutTradingComponent from '@layouts/LayoutTrading';
import DetectOffline from '@components/DetectOffline';
import Loading from '@components/Loading';
import * as utils from '@utils/utils';
import LoadingProcess from '@components/LoadingProcess';
import { useSelector } from 'react-redux';
import { ActionTypes } from '@constants/action-types';

const LoginPage = lazy(() => import('@pages/Login/LoginPage'));
const ConfirmResetPassword = lazy(
  () => import('@pages/Login/ConfirmResetPassword')
);
const RegisterPage = lazy(() => import('@pages/Register/RegisterPage'));
const RegistrationConfirmation = lazy(
  () => import('@pages/Register/RegistrationConfirmation')
);
const HomePage = lazy(() => import('@pages/Home/HomePage'));
const OverviewPage = lazy(() => import('@pages/Overview/OverviewPage'));
const PrivacyAndPolicyPage = lazy(
  () => import('@pages/PrivacyAndPolicy/PrivacyAndPolicyPage')
);
const TermAndConditionsPage = lazy(
  () => import('@pages/TermAndConditions/TermAndConditionsPage')
);
const TradingChart = lazy(() => import('@pages/TradingCharts/TradingChart'));
const MatrixPage = lazy(() => import('@pages/Matrix/MatrixPage'));
const CommissionPage = lazy(() => import('@pages/Commission/CommissionPage'));
const Wallet = lazy(() => import('@pages/Wallet'));
const AIPage = lazy(() => import('@pages/AI/AIPage'));
const IntroductionAIPage = lazy(() => import('@pages/AI/IntroductionAIPage'));
const AffilateLinkPage = lazy(
  () => import('@pages/AffilateLink/AffilateLinkPage')
);
const AffilateIntroductionPage = lazy(
  () => import('@pages/AffilateLink/AffilateIntroductionPage')
);
const FAQPage = lazy(
  () => import('@pages/FAQ/FAQPage')
);
const BinaryOptionPage = lazy(
  () => import('@pages/BinaryOption/BinaryOptionPage')
);
const MatrixIntroductionPage = lazy(
  () => import('@pages/Matrix/MatrixIntroductionPage')
);
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  const lastLocation = useLastLocation();
  routerHelpers.saveLastLocation(lastLocation);
  if (isLogin) {
    const auth = (props: any) =>
      rest.trading ? (
        <LayoutTradingComponent>
          <Component {...props} />
        </LayoutTradingComponent>
      ) : (
          <LayoutComponent>
            <Component {...props} />
          </LayoutComponent>
        );
    return <Route {...rest} render={auth} />;
  }
  return (
    <Redirect to={{ pathname: '/login', state: { previousPath: rest.path } }} />
  );
};

export const Routes = withRouter(() => {
  const { type, status } = useSelector((state: globalState) => state.fetching);

  return (
    <DetectOffline>
      {type === ActionTypes.SWITCH_ACCOUNT_REQUEST && status && (
        <LoadingProcess />
      )}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/about-us/overview" component={OverviewPage} />
          <Route path="/about-us/binary-option" component={BinaryOptionPage} />
          <Route path="/about-us/matrix" component={MatrixIntroductionPage} />
          <Route
            path="/about-us/introduction-ai"
            component={IntroductionAIPage}
          />
          <Route
            path="/affiliate-program"
            component={AffilateIntroductionPage}
          />
          <Route path="/privacy-policy" component={PrivacyAndPolicyPage} />
          <Route path="/term-conditions" component={TermAndConditionsPage} />
          <Route path="/faqs" component={FAQPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/forgot-password" component={ConfirmResetPassword} />
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/register-confirm"
            component={RegistrationConfirmation}
          />
          <PrivateRoute
            path="/tradingroom"
            trading={true}
            component={TradingChart}
            isLogin={utils.getStorage('authToken')}
          />
          <PrivateRoute
            path="/orderbook"
            component={() => (
              <div style={{ color: 'white', width: '80%' }}>Order book</div>
            )}
            isLogin={utils.getStorage('authToken')}
          />
          <PrivateRoute
            path="/affiliate-link"
            component={AffilateLinkPage}
            trading={true}
            isLogin={utils.getStorage('authToken')}
          />
          <PrivateRoute
            isLogin={utils.getStorage('authToken')}
            path="/matrix"
            component={MatrixPage}
          />
          <PrivateRoute
            path="/commission"
            trading={true}
            component={CommissionPage}
            isLogin={utils.getStorage('authToken')}
          />
          <PrivateRoute
            isLogin={utils.getStorage('authToken')}
            path="/wallet"
            trading={true}
            component={Wallet}
          />
          <PrivateRoute
            isLogin={utils.getStorage('authToken')}
            path="/airobot"
            component={AIPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </DetectOffline>
  );
});
