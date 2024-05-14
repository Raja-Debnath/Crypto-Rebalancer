import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import Users from "./models/models.user.js";
import CryptoPrice from "./models/models.Portfolio.js";
import { getCoinPrices } from "./utils/utils.coingeckoApi.js";
import fetchCryptoData from "./portfolio/portfolio.CoinPrice.js";
dotenv.config({
    path: "./.env",
});
const app = express();
// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data
// import price api
app.get("/api/prices", async (req, res) => {
    try {
        const prices = await getCoinPrices();
        res.json(prices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
app.get("/api/Crypto", async (req, res) => {
    try {
        const prices = await CryptoPrice.find();
        res.json(prices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
app.get('/api/arr', async (req, res) => {
    try {
      const prices = await fetchCryptoData();
      res.json(prices);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  })
app.listen(5000, () => {
    console.log(`Server listening on port 5000`);
});
export default app;

// dont know why it was added {middlewawre}

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.statusCode || 500).json({ message: err.message });
// });

// import getCoinPricesInr from './portfolio/portfolio.CoinPrice.js';

// feching usd and inr data
// import { fetchCryptoData } from './portfolio/portfolio.CoinPrice.js';

// CURRENCY API



// Error handling middleware

//// testing
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });
