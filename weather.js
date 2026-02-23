const axios = require("axios");
require("dotenv").config();

const city = process.env.CITY;

axios
  .get(`https://wttr.in/${city}?format=%t`)
  .then((res) => {
    console.log(`Temp in ${city} is ${res.data}`);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
