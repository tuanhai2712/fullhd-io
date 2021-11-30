import Api from '@classes/Api';

class WalletApi extends Api {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  /** get deposit of user */
  public getDepositByUser = async (page: number, pageSize: number = 5) => {
    return await this.instance.get(`/wallet/deposit?page=${page}&pageSize=${pageSize}`);
  };

  /** get withdraw of user */
  public getWithdrawByUser = async (page: number, pageSize: number = 5) => {
    return await this.instance.get(`/wallet/withdraw?page=${page}&pageSize=${pageSize}`);
  };

  /** get history of user */
  public getHistoriesByUser = async (page: number, pageSize: number = 5) => {
    return await this.instance.get(`/wallet/histories?page=${page}&pageSize=${pageSize}`);
  };

  /** get transfer of user */
  public getTransferByUser = async (page: number, pageSize: number = 5) => {
    return await this.instance.get(`/wallet/transfers?page=${page}&pageSize=${pageSize}`);
  };

  /** convert usdt to eth */
  public convertUsdtToEth = async (amount: number) => {
    return await this.instance.get(`/wallet/convert-rate?amount=${amount}`);
  };

  /** transfer amount to user */
  public transferAmountToUser = async (
    transferInfor: {
      amount: number,
      username: string,
      password: string,
      tfa_code: string
    }
  ) => {
    if (transferInfor.tfa_code)
      return await this.instance.post(`/wallet/transfer`, {
        amount: transferInfor.amount,
        username: transferInfor.username,
        password: transferInfor.password,
        tfa_code: transferInfor.tfa_code
      });
    else
      return await this.instance.post(`/wallet/transfer`, {
        amount: transferInfor.amount,
        username: transferInfor.username,
        password: transferInfor.password
      });
  };

  /** withdraw amount to user */
  public withdrawAmountToUser = async (
    withdrawInfor: {
      amount: number,
      wallet_address: string,
      password: string,
      tfa_code: string,
      symbol: string
    }
  ) => {
    if (withdrawInfor.tfa_code)
      return await this.instance.post(`/wallet/withdraw`, {
        amount: withdrawInfor.amount,
        wallet_address: withdrawInfor.wallet_address,
        password: withdrawInfor.password,
        symbol: withdrawInfor.symbol,
        tfa_code: withdrawInfor.tfa_code
      });
    else
      return await this.instance.post(`/wallet/withdraw`, {
        amount: withdrawInfor.amount,
        wallet_address: withdrawInfor.wallet_address,
        password: withdrawInfor.password,
        symbol: withdrawInfor.symbol,
      });
  };
}

export default new WalletApi();
