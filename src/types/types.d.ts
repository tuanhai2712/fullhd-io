interface mirrorObject {
  [key: string]: string;
}

interface globalState {
  user: any;
  trading: any;
  matrix: any;
  wallet: any;
  aiRobot: any;
  serverError: any;
  requestSuccess: any;
  tfa: any;
  fetching: any;
  commission: any;
  profile: any;
}

interface userState {
  isDemo: boolean;
  showDemoErr: any;
  userInfo: object;
  userDemoInfo: object;
  bonus: {
    showBonusAt: string;
  };
  emailLoginEnabled: boolean;
}

interface IUserInfo {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
}

interface IUpdateUserInfoResponse {
  status: number;
  statusText: string;
  data: {
    user: IUserInfo;
  };
}

interface ITradeHistory {
  time: string;
  date: string;
  currency: {
    text: string;
    symbol: string;
  };
  binaries: number;
  prices: number;
}

interface ITradingHistoryResponse {
  data: ITradeHistory[];
  message: string;
  status: number;
}

interface IRank {
  level: number;
  nationality: string;
  name: string;
  money: number;
}

interface IRankingSystemsResponse {
  data: {
    rankingSystems: IRank[];
  };
  message: string;
  status: number;
}

interface tradingState {
  tradingData: array;
  actionStatus: number;
  isShowToggleSidebar: boolean;
  tradingHistories: {
    data: ITradeHistory[];
    hasMore: boolean;
  };
  tradeTransaction: {
    type?: number;
    amount?: number;
    createdAt?: date;
  };
  rankingSystems: IRank[];
  sideBarPage: string;
}

interface ibBuyState {
  userList: object;
  commission: object;
  commissionDetail: object;
  tradeHistories: object;
}

interface matrixState {
  matrixList: object;
  upgradePackage: object;
  withdrawal: object;
  matrixInformation: object;
  packagesList: object;
  matrixChart: object;
  selectPackage: object;
}

interface walletState {
  walletData: arrray;
  walletDetail: object;
  withdrawData: object;
  transferData: object;
}

interface aiRobotState {
  aiBot: object;
  configRates: object;
  aiCommission: object;
  aiHistories: object;
  totalAICommission: object;
}

interface commissionState {
  commissionStatistic: object;
  commissionDetail: object;
  commissionVolume: object;
  commissionIB: object;
  memberList: object;
}
interface tfaState {
  qrCode: string;
  secret_code: string;
  tfaEnabled: boolean;
}

interface profileState {
  level: number;
  totalCommission: number;
  totalVolumeInWeek: number;
  totalUserBuyIB: number;
  ibCommissionNotWithdrawal: number;
  commissionNotWithdrawal: number;
  totalChild: number;
  totalF1Child: number;
  userRanking: number;
  bonusMoney: number;
}
