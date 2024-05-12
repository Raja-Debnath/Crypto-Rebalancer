import fetch from "node-fetch";

import {v4 as uuidv4} from 'uuid';
import axios from "axios";
import CryptoPrice from "../models/models.Portfolio.js";
// const getCoinPricesInr = async () => {
//     try {
//         const response = await axios.get(
//             `https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cpolkadot%2Cethereum%2Cbitcoin%2Ctether%2Cchainlink%2Cpolygon&vs_currencies=usd,inr&include_market_cap=true&include_24hr_change=true`
//         );
//         const prices = {};

//         Object.entries(response.data).forEach(([coin, data]) => {
//             prices[coin] = {
//                 current_price: {
//                     usd: data.usd,
//                     inr: data.inr,
//                 },
//                 market_cap: {
//                     usd: data.usd_market_cap,
//                     inr: data.inr_market_cap,
//                 },
//                 price_change_percentage_24h: {
//                     usd: data.usd_24h_change,
//                     inr: data.inr_24h_change,
//                 },

//             };
//             prices.map((crp)=>{
//                 console.log(crp[0]);
//                 console.log(crp[1]);
//                 console.log(crp[2]);
//             })
            
//         });


        // const CryptoPrice1 = new CryptoPrice({
        //     coin: "",
        //     current_price: {
        //         usd: prices.bitcoin.current_price.usd,
        //     },
        //     market_cap: {
        //         usd: prices.bitcoin.market_cap.usd,
        //     },
        //     price_change_percentage_24h: {
        //         usd: prices.bitcoin.price_change_percentage_24h.usd,
        //     },
        // });
        // CryptoPrice1.save()
        //     .then(() => console.log("Data saved successfully"))
        //     .catch((error) => console.error("Error saving data:", error));
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
// getCoinPricesInr();
// Function to call getCoinPricesInr every 30 seconds
// const callApiAtInterval = () => {
//     getCoinPricesInr().then(() => {
//         setTimeout(callApiAtInterval, 30 * 1000); // 30 seconds in milliseconds
//     });
// };

// // Start the interval execution
// callApiAtInterval();


//   test case 2 ----------------------------------------------------------------------------
// let convertedData; // Declare a variable to store converted data
// const fetchCryptoData = async () => {
//     const url = "https://api.coingecko.com/api/v3/simple/price?ids=solana,polkadot,ethereum,bitcoin,tether,chainlink,polygon&vs_currencies=usd&include_market_cap=true&include_24hr_change=true";
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//        const fetchedData = await response.json(); // Store fetched data
//         const cryptoArrays = [];
//         for (const [name, {usd, usd_market_cap, usd_24h_change}] of Object.entries(fetchedData)) {
//             const cryptoArray = [
//                 name.charAt(0).toUpperCase() + name.slice(1),
//                 usd,
//                 usd_market_cap,
//                 usd_24h_change
//             ];
//             cryptoArrays.push(cryptoArray);
//         }
// // console.log(cryptoArrays);
// console.log(cryptoArrays[0]);


        // const CryptoPrice1 = new CryptoPrice({
        //     coin: "",
        //     current_price: {
        //         usd: cryptoArrays.bitcoin.current_price.usd,
        //     },
        //     market_cap: {
        //         usd: cryptoArrays.bitcoin.market_cap.usd,
        //     },
        //     price_change_percentage_24h: {
        //         usd: cryptoArrays.bitcoin.price_change_percentage_24h.usd,
        //     },
        // }); 
        // CryptoPrice1.save()
        //     .then(() => console.log("Data saved successfully"))
        //     .catch((error) => console.error("Error saving data:", error));
//     } catch (error) {
//         console.error("Error:", error);
//         return null;
//     }
// };


// (async () => {
//     convertedData = await fetchCryptoData(); 
//     console.log(convertedData); 
// })();

// test case 3 --------------------------------------------------------------

const fetchCryptoData = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=solana,polkadot,ethereum,bitcoin,tether,chainlink,polygon&vs_currencies=usd,inr&include_market_cap=true&include_24hr_change=true";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        let counter = 1;

function assignId(obj) {
  if (typeof obj === 'object' && obj !== null) {
    obj.id = counter++;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        assignId(obj[key]);
      }
    }
  }
}

// Assign IDs recursively
assignId(data);

// console.log(data);
return data 
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};
const printCryptoData = (data) => {
    if (data) {
        const cryptoArrays = [];
        for (const [name, {usd, usd_market_cap, usd_24h_change}] of Object.entries(data)) {
            const cryptoArray = [
                name.charAt(0).toUpperCase() + name.slice(1),
                usd,
                usd_market_cap,
                usd_24h_change
            ];
            cryptoArrays.push(cryptoArray);
        }
      
       cryptoArrays.map((crp)=>{
        // console.log(crp[0]);
        //   console.log(crp[1]);
        //     console.log(crp[2]);
        })
    }
    
}



fetchCryptoData()
    .then(data => {
        printCryptoData(data);
    });

export { fetchCryptoData };
// export default getCoinPricesInr 
