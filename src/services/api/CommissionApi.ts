import Api from '@classes/Api'

class CommissionApi extends Api {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  public buyIB = () => this.instance.put(`refs/buy-ib/`)
  public getCommissionStatistic = () => this.instance.get(`refs/statistic`)
  public withdrawalRefProfit = (password: string) => this.instance.post(`refs/withdraw-commission`, { password })
  public withdrawalIBProfit = (password: string) => this.instance.post(`refs/withdraw-ib`, { password })
  public getCommissionDetail = ({ page, pageSize }: { page: number, pageSize: number }) => this.instance.get(`refs/commissions?page=${page}&pageSize=${pageSize}`)
  public getCommissionVolume = ({ page, pageSize }: { page: number, pageSize: number }) => this.instance.get(`refs/week/commissions?page=${page}&pageSize=${pageSize}`)
  public getCommissionIB = ({ page, pageSize, username }: { page: number, pageSize: number, username: string }) => this.instance.get(`refs/ibs?page=${page}&pageSize=${pageSize}&username=${username}`)
  public getMemberList = ( { page, pageSize, username, is_ib }: { page: number, pageSize: number, username: string, is_ib: any }) => this.instance.get(`refs/list?page=${page}&pageSize=${pageSize}&username=${username}${is_ib === null ? "" : `&is_ib=${is_ib}`}`)
}

export default new CommissionApi();
