const mongoose = require('mongoose');

const cryptoPriceSchema = new mongoose.Schema({
  coin: {
    type: String,
    required: true,
    enum: ['bitcoin', 'chainlink', 'ethereum', 'polkadot', 'solana', 'tether'],
  },
  current_price: {
    type: Number,
    required: true,
  },
  market_cap: {
    type: Number,
    required: true,
  },
  price_change_percentage_24h: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('CryptoPrice', cryptoPriceSchema);
