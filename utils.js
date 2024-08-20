function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciustoFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
// common js
module.exports = {
  generateRandomNumber,
  celciustoFahrenheit,
};
