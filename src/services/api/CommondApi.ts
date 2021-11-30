import UseDemoTokenAPI from '@classes/UseDemoTokenAPI';

class CommondApi extends UseDemoTokenAPI {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }


  public switchAccount = async () => {
    return await this.instance.get(`/users/switch-account`);
  };
  public addDemoMoney = () => this.instance.post(`users/add-money-demo`);

  public getUsers = () => this.instance.get<any>('/users');

  public refreshToken = async () => {
    const resultRefreshToken = this.instance.get('/users/refresh-token');
    if (resultRefreshToken) {
      return resultRefreshToken;
    }
    return {
      status: 500,
      message: 'Login fail'
    };
  };
}
export default new CommondApi();
