import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((respones) =>
      respones.json().then((json) => {
        setCoins(json);
        setLoding(false);
      })
    );
  }, []);
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
    </div>
  );
};

export default App;
