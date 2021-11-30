import Api from '@classes/Api';

class UserApi extends Api {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  public tfaLogin = ({
    identity,
    password,
    tfa_code
  }: {
    identity: string;
    password: string;
    tfa_code: string;
  }) => this.instance.post(`users/tfalogin`, { identity, password, tfa_code });

  public getBonusStatus = () => {
    const result = this.instance.get<any>(`showBonusAt-status`);
    return result;
  };

  public updateBonusFlag = () => {
    const result = this.instance.put<any>(`showBonusAt-status`);
    return result;
  };

  public getLoginTokenAgain = ({ identity }: { identity: string }) => {
    this.instance.post(`users/get-login-token`, { identity });
  };

  public login = async ({
    identity,
    password
  }: {
    identity: string;
    password: string;
  }) => this.instance.post('/users/login', { identity, password });

  public loginEmail = async ({
    identity,
    password,
    login_code
  }: {
    identity: string;
    password: string;
    login_code: string;
  }) =>
    this.instance.post('/users/email-login', {
      identity,
      password,
      login_code
    });

  public register = async ({
    email,
    password,
    full_name,
    phone,
    username,
    sponsor_username
  }: {
    email: string;
    password: string;
    full_name: string;
    phone: string;
    username: string;
    sponsor_username: string;
  }) => {
    const resultRegister = await this.instance.post('/users', {
      email,
      password,
      full_name,
      phone,
      username,
      sponsor_username
    });
    if (resultRegister) {
      return resultRegister;
    }

    return {
      status: 500,
      message: 'Regsiter fail'
    };
  };
  public changePassword = async ({
    password,
    new_password,
    _id
  }: {
    password: string;
    new_password: string;
    _id: string;
  }) => {
    const changePasswordResult = await this.instance.put(
      `/users/change-password/${_id}`,
      JSON.stringify({ password, new_password, _id })
    );
    if (changePasswordResult) {
      return changePasswordResult;
    }

    return {
      status: 500,
      message: 'change password fail'
    };
  };
  public updateUserProfile = async ({
    full_name,
    phone,
    _id,
    is_tfa_enabled
  }: {
    full_name: string;
    phone: string;
    _id: string;
    is_tfa_enabled: boolean;
  }) => {
    const updateUserProfileResult = await this.instance.put(
      `/users/update/${_id}`,
      JSON.stringify({ full_name, phone, is_tfa_enabled })
    );
    if (updateUserProfileResult) {
      return updateUserProfileResult;
    }

    return {
      status: 500,
      message: 'update profile fail'
    };
  };

  public sendRequestResetPassword = (email: string) =>
    this.instance.post(`/users/forgot-password`, { email });
  public confirmResetPassword = ({
    password,
    _id,
    verify_code
  }: {
    password: string;
    _id: string;
    verify_code: string;
  }) =>
    this.instance.put(
      `users/forgot-password?user_id=${_id}&verify_code=${verify_code}`,
      { password }
    );

  public registrationConfirm = ({
    _id,
    verify_code
  }: {
    _id: string;
    verify_code: string;
  }) =>
    this.instance.get<any>(
      `users/confirm?user=${_id}&verify_code=${verify_code}`
    );
  public getUserProfile = () => this.instance.get<any>(`me`);
  public enableTFA = () => this.instance.put(`users/tfa`);
  public disableTFA = () => this.instance.delete(`users/tfa`);
  public confirmVerifyCode = (verify_code: string) =>
    this.instance.put(`users/tfa/confirm`, { verify_code });
}
export default new UserApi();
