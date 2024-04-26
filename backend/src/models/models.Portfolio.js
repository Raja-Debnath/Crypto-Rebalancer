import mongoose from "mongoose";


const CryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const CryptoPrice = mongoose.model('Crypto', CryptoSchema);

 export default CryptoPrice;