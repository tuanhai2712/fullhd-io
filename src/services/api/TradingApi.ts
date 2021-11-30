import UseDemoTokenAPI from '@classes/UseDemoTokenAPI';

class TradingApi extends UseDemoTokenAPI {
  public constructor() {
    super(process.env.REACT_APP_API_URL);
  }

  public getTradingData = async () => {
    let resultData = await this.instance.get<any>('/blocks');
    // let resultData = await this.getData()
    let tradingData = resultData.data;
    tradingData = tradingData.map((item) => {
      item.date = new Date(item.date);
      return item;
    });

    if (tradingData.length > 0) {
      return {
        status: 200,
        message: 'Get Trading Data Success',
        data: {
          tradingData: tradingData,
        },
      };
    }

    return {
      status: 500,
      message: 'Get Trading Data fail',
    };
  };

  public getTradingHistories = async (payload: { limit: number; start: number; }) => {
    const result = await this.instance.get(`/history?limit=${payload.limit}&start=${payload.start}`);

    return {
      ...result,
      data: result.data.data
    };
  };

  public getUseRanking = async () => {
    return await this.instance.get('/userranking');
  };

  public getRanking = async (start, limit) => {
    return await this.instance.get(`/ranking?limit=${limit}&start=${start}`);
  };

  public tradingBuySell = async (symbol: string = "btcusdt", type: number = 0, amount: number, totalAmount: number) => {
    return await this.instance.post(`/buysell`, { symbol, type, amount, totalAmount });
  };

  public totalBuySell = async (symbol: string = "btcusdt") => {
    return await this.instance.get(`/totalBuySell/${symbol}`);
  };
}
export default new TradingApi();
