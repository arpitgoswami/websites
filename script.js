const bitcoin = document.querySelector("#bitcoin");
const ethereum = document.querySelector("#ethereum");
const dogecoin = document.querySelector("#dogecoin");

// URL of the CoinGecko API
const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr";

// Function to fetch coin prices
async function fetchCoinPrices() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const bitcoinPrice = data.bitcoin.inr;
  const ethereumPrice = data.ethereum.inr;
  const dogecoinPrice = data.dogecoin.inr;

  bitcoin.textContent = "₹ " + bitcoinPrice;
  ethereum.textContent = "₹ " + ethereumPrice;
  dogecoin.textContent = "₹ " + dogecoinPrice;
}

// Call the function to fetch coin prices
fetchCoinPrices();
