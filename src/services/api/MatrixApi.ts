import Api from '@classes/Api';

class MatrixApi extends Api {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  public getMatrix = async ({
    //Danh sách user
    currentPage,
    searchText,
    pageSize,
    packageid
  }: {
    currentPage: number;
    searchText: string;
    pageSize: number;
    packageid: string;
  }) => {
    const page = currentPage || 1;
    const limit = pageSize || 10;
    const packageId = packageid || null;
    if (packageId === null) {
      return {
        status: 200,
        payload: {
          data: [],
          totalItems: 0,
          page: 1
        }
      };
    }
    const userList = await this.instance.get(
      `/matrix/user-list?username=${searchText}&page=${page}&limit=${limit}&packageid=${packageId}`
    );
    // call api
    if (true) {
      return {
        status: 200,
        payload: {
          data: userList.data.dataReturn || [],
          totalItems: userList.data.total || 0,
          page: currentPage
        }
      };
    }
    return {
      status: 500,
      message: 'Get fail'
    };
  };

  public getMatrixInformationOfUser = async () => {
    const statistic = await this.instance.get(`/matrix/statistic`);
    if (statistic) {
      return {
        status: 200,
        payload: {
          balance: 200,
          commission_balance: statistic.data.commisionBalance || 0,
          is_auto_upgrade_matrix:
            statistic.data.is_auto_upgrade_matrix || false,
          matrix_withdraw_back: statistic.data.matrix_withdraw_back || 0
        }
      };
    }
    return {
      status: 500,
      message: 'Withdrawal fail'
    };
  };

  public setAutoUpgrade = async () => {
    const autoUpgrade = await this.instance.put(
      `/matrix/set-auto-upgrade-matrix`
    );
    if (autoUpgrade) {
      return {
        status: 200,
        payload: {
          autoUpgrade
        }
      };
    }
    return {
      status: 500,
      message: 'Auto Upgrade fail'
    };
  };

  public getAllPackages = async () => {
    const allPackages = await this.instance.get(`/matrix/all-package`);
    if (allPackages) {
      return {
        status: 200,
        payload: {
          allPackages: allPackages.data.dataReturn || []
        }
      };
    }
    return {
      status: 500,
      message: 'Withdrawal fail'
    };
  };

  public getMatrixDraw = async packageId => {
    const matrixDraw = await this.instance.get(
      `/matrix/draw-matrix?matrix_package=${packageId}`
    );
    if (matrixDraw) {
      return {
        status: 200,
        payload: {
          matrixDraw: matrixDraw.data.data || []
        }
      };
    }
    return {
      status: 500,
      message: 'Withdrawal fail'
    };
  };

  public upgradePackage = async ({
    matrixPackage,
    option,
    idPackage
  }: {
    matrixPackage: number;
    option: number;
    idPackage: string;
  }) => {
    // call api
    const result = await this.instance.post(`/matrix/buy-package`, {
      package_id: idPackage,
      type: option
    });
    if (result.status === 200) {
      return {
        status: 200,
        payload: result
      };
    }
    return {
      status: result.status,
      payload: result
    };
  };

  public withdrawal = async (password: string) => {
    const result = await this.instance.post(`/matrix/withdraw`, { password });
    if (true) {
      return {
        status: 200,
        payload: result
      };
    }
    return {
      status: 500,
      message: 'Withdrawal fail'
    };
  };
}

export default new MatrixApi();
