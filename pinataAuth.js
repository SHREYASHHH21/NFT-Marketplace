// require("dotenv").config();
// const key = process.env.REACT_APP_PINATA_KEY;
// const secret = process.env.REACT_APP_PINATA_SECRET;
// const fs = require("fs")

// import axios from "axios";

// const pinataSDK = require("@pinata/sdk");
// const pinata = new pinataSDK(key,secret);

// pinata.testAuthentication().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

// const readableStreamForFile = fs.createReadStream(file);

// require("dotenv").config();
// const {REACT_APP_ALCHEMY_API_URL,REACT_APP_PRIVATE_KEY} = process.env;

// console.log(REACT_APP_ALCHEMY_API_URL);
// console.log(REACT_APP_PRIVATE_KEY);



// console.log(key)
// console.log(secret)

// Unsupported engine{
//   package: 'hardhat@2.9.7',
//   required: { node: '^12.0.0 || ^14.0.0 || ^16.0.0' },
//   current: { node: 'v18.16.0', npm: '9.6.6' }
// }

const axios = require("axios");
async function fetch(){
    const data = await axios.get('https://gateway.pinata.cloud/ipfs/QmcfBHraE2c6BMoNtVuMbW7GytjHeVqtr5TGr2Y77QgAQW');
    console.log(data);
}

fetch();