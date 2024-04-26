'use strict';


import json from 'json';
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import dotenv from 'dotenv';


import CryptoPrice from './models/models.Portfolio.js';
import { getCoinPrices } from './utils/utils.coingeckoApi.js';
// import getCoinPricesInr from './portfolio/portfolio.CoinPrice.js';
import { fetchCryptoData } from './portfolio/portfolio.CoinPrice.js';
import { get } from 'mongoose';

dotenv.config(
    {
        path: './.env'
    }
);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// testing        
app.get('/', (req, res) => {
    res.send('API is running...');
});



// import price api
  app.get('/api/prices', async (req, res) => {
    try {
      
        const prices = await getCoinPrices();
        res.json(prices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

  app.get('/api/Cyrpto', async (req, res) => {
    try {
        const prices = await CryptoPrice.find()
        res.json(prices)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// CURRENCY API
  



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











// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ message: err.message });
});

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app; // Export the app instance for potential testing
