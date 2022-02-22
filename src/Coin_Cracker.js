import { useEffect, useState } from "react";

let num = 0;

const App = () => {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [serch, setSearch] = useState("");
  const [coinInverter, setCoinInverter] = useState("");
  const [inverter, setInverter] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((respones) =>
      respones.json().then((json) => {
        setCoins(json);
        setLoding(false);
      })
    );
  }, []);

  const onClickList = () => {
    coins.map((coin) =>
      console.log(`${coin.name}(${coin.symbol}) : $${coin.quotes.USD.price}`)
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    let confirm = false;
    for (let i = 0; i <= coins.length; i++) {
      if (serch === coins[i].name) {
        confirm = true;
        console.log(
          `${coins[num].name}(${coins[num].symbol}) : $${coins[num].quotes.USD.price}`
        );
        setInverter(!inverter);
        break;
      }
      num++;
    }
    // coins.map((coin) => {
    //   if (serch === coin.name) {
    //     confirm = true;
    //     console.log(`${coin.name}(${coin.symbol}) : $${coin.quotes.USD.price}`);
    //     setInverter(!inverter);
    //   }
    // });
    if (confirm === false) console.log("The coin you entered does not exist.");
    setSearch("");
  };

  const handleInverter = (event) => {
    setCoinInverter(event.target.value);
  };

  const onSubmitInverter = (event) => {
    event.preventDefault();
    console.log(
      `Coin name : ${coins[num].name}\nCoin ${Math.floor(
        coinInverter / parseInt(coins[num].quotes.USD.price)
      )} available for purchase`
    );
    num = 0;
    // coins.map((coin) =>
    //   console.log(
    //     `${coin.name} : ${Math.round(coinInverter / coin.quotes.USD.price)}`
    //   )
    // );
    setCoinInverter("");
    setInverter(!inverter);
  };

  return (
    <div>
      <h1>The Coins!({loading ? "" : `${coins.length}`})</h1>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <button onClick={onClickList}>Coins List</button>
          <hr />

          <h3>
            Coins Search & Number of coins that can be bought with dollars
          </h3>

          <form onSubmit={onSubmitSearch}>
            <input
              value={serch}
              onChange={handleSearch}
              placeholder="Please your coin name..."
              type="text"
              disabled={!inverter}
            />
            <button disabled={!inverter}>Search!!!</button>
          </form>

          <form onSubmit={onSubmitInverter}>
            <input
              value={coinInverter}
              onChange={handleInverter}
              placeholder="Please enter dollars..."
              type="number"
              disabled={inverter}
            />
            <button disabled={inverter}>Inverter!!!</button>
          </form>
          <hr />
        </>
      )}
    </div>
  );
};

export default App;
