const request = require('request');

// const fetchCoordsByIP = function (ipString, callback) {
//   request(`https://freegeoip.app/json/174.94.17.251`, (error, response, body) => {
//     if (error) {
//       return ("Error: system error", null);
//     }

//     // if (response.statusCode !== 200) {
//     //   const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//     //   callback(Error(msg), null);
//     //   return;
//     // }
//     const { latitude, longitude } = JSON.parse(body);
//     // callback(null, ip);
//     console.log({ latitude, longitude })
//   })
// }
// fetchCoordsByIP()

// { latitude: 43.6567, longitude: -79.34 }


const fetchISSFlyOverTimes = function(coordinates,callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=43.6567&lon=-79.34`, (error, response, body) => {
  const passes = JSON.parse(body).response
  console.log(passes) 
  // if (error) {
  //     callback(error, null);
  //     return;
  //   }

  //   if (response.statusCode !== 200) {
  //     const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
  //     callback(Error(msg), null);
  //     return;
  //   }
  //   const { latitude, longitude } = JSON.parse(body);
  //   callback(null, { latitude, longitude });

  });
};
fetchISSFlyOverTimes()