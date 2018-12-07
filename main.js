let btn = document.getElementById("btn");
let price = document.getElementById("price");
let symbol = document.getElementById("symbol");
let currency = document.getElementById("currency");

// btn.addEventListener("click", function() {
//   $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function(data) {
//     let parsedData = JSON.parse(data);
//     console.log(parsedData);
//     price.innerHTML = parsedData.bpi.EUR.rate;
//   });
// });

btn.addEventListener("click", function () {
  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function (res) {
      console.log(res.data.bpi.EUR.symbol);

      symbol.innerHTML = res.data.bpi.EUR.symbol;
      price.innerHTML = res.data.bpi.EUR.rate;
      currency.innerHTML = res.data.bpi.EUR.code;
      console.log(res.data.bpi);
    })
    .catch(function (err) {
      console.log(err);
    });
});