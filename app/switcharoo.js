// function calculateExchangeRate() {
//     const amount = document.getElementById("amount").value;
//     const fromCurrency = document.getElementById("fromCurrency").value;
//     const toCurrency = document.getElementById("toCurrency").value;
    
//     fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
//       .then(response => response.json())
//       .then(data => {
//         const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
//         document.getElementById("exchangeRate").innerText = (amount * exchangeRate).toFixed(2);
//       });
//   }