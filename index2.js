// const { fetchMyIP,
//   fetchCoordsByIP,
//   fetchISSFlyOverTimes } = require('./iss_promised');

//   fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))
//   .catch(error => console.log(error))
const { nextISSTimesForMyLocation,
printPassTimes } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});

