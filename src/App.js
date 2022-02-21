import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinInverter, setCoinInverter] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((respones) =>
      respones.json().then((json) => {
        setCoins(json);
        setLoding(false);
      })
    );
  }, []);
  const onChange = (event) => {
    setCoinInverter(event.target.value);
  };
  const onClick = () => {
    console.log(
      coins.map(
        (coin) =>
          `${coin.name} : ${Math.round(coinInverter / coin.quotes.USD.price)}`
      )
    );
  };
  return (
    <div>
      <h1>The Coins!({loading ? "" : `${coins.length}`})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => {
            <option>
              {console.log(
                `${coin.name}(${coin.symbol}) : $${coin.quotes.USD.price}`
              )}
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
            </option>;
          })}
        </select>
      )}
      <h1>USD coins inverter</h1>
      <input
        onChange={onChange}
        placeholder="Please write the number of coins..."
        type="number"
      />
      <button onClick={onClick}>Inverter!!!</button>
    </div>
  );
};

export default App;
