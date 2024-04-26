import Crypto from "../models/models.Portfolio"

const cryptoData = {
  bitcoin: {
    current_price: 66753,
    market_cap: 1314313524182.68,
    price_change_percentage_24h: 0.45278665795692
  },
  // ... data for other cryptocurrencies
};

// Function to iterate and push data
async function pushDataToDB() {
  try {
    for (const cryptoName in cryptoData) {
      const { current_price, market_cap, price_change_percentage_24h } = cryptoData[cryptoName];
      const newCrypto = new Crypto({
        name: cryptoName,
        current_price,
        market_cap,
        price_change_percentage_24h,
      });
      await newCrypto.save();
      console.log(`Successfully added ${cryptoName} to database`);
    }
  } catch (error) {
    console.error('Error pushing data to MongoDB:', error);
  }
}

pushDataToDB();
