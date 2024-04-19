import axios from "axios";

const getCoinPricesInr = async () => {
    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cpolkadot%2Cethereum%2Cbitcoin%2Ctether%2Cchainlink%2Cpolygon&vs_currencies=usd,inr&include_market_cap=true&include_24hr_change=true`
        );
        const prices = {};

        Object.entries(response.data).forEach(([coin, data]) => {
            prices[coin] = {
                current_price: {
                    usd: data.usd,
                    inr: data.inr,
                },
                market_cap: {
                    usd: data.usd_market_cap,
                    inr: data.inr_market_cap,
                },
                price_change_percentage_24h: {
                    usd: data.usd_24h_change,
                    inr: data.inr_24h_change,
                },
            };
        });

        console.log(prices);

        return prices;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to call getCoinPricesInr every 30 seconds
const callApiAtInterval = () => {
    getCoinPricesInr().then(() => {
        setTimeout(callApiAtInterval, 30 * 1000); // 30 seconds in milliseconds
    });
};

// Start the interval execution
callApiAtInterval();

export { getCoinPricesInr };
