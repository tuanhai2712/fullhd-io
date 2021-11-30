import Api from '@classes/Api'

class AIApi extends Api {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  public getAIBot = () => this.instance.get('bots')
  public getConfigRates = () => this.instance.get('bots/configs/today')
  public getTotalCommissionAI = () => this.instance.get('users/commission-ib')
  public getAICommission = ({buyer, page}: {buyer: string, page: number}) => this.instance.get(`bots/commissions?buyer=${buyer}&page=${page}`)
  public getAIHistories = (page: number) => this.instance.get(`bots/history?page=${page}`)
  public withdrawalInvestmentProfit = (password: string) => this.instance.post('bots/collect-profit', { password })
  public withdrawalAICommission = (password: string) => this.instance.post('bots/collect-commission', { password })
  public refundInvest = (invest_id: string, password: string) => this.instance.delete(`bots`, { data: {invest_id, password} })
  public buyAIRobot = (amount: number) => this.instance.post(`bots`, { amount })
  public addInvestment = (amount: number) => this.instance.put(`bots/add-invest`, { amount })
  public autoRefresh = (auto_refresh: boolean) => this.instance.put(`bots`, { auto_refresh })

}

export default new AIApi();
