import axios from 'axios';

const getCoinPrices = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cpolkadot%2Cethereum%2Cbitcoin%2Ctether%2Cchainlink%2Cpolygon&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    const prices = {};

    Object.entries(response.data).forEach(([coin, data]) => {
      prices[coin] = {
        current_price: data.usd,
        market_cap: data.usd_market_cap,
        price_change_percentage_24h: data.usd_24h_change,
      };
    });

    console.log(prices);

    return prices;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getCoinPrices };