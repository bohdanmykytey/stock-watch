import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [stocks, setStocks] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const apiURL = `https://financialmodelingprep.com/api/v3/profile/${input}?apikey=5f19ea882fea37e649bdc3230aa7ed2c`;

    const response = await axios.get(apiURL);
    setStocks(response.data);
    console.log(response.data);
    //implement error handling
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Type Stock Symbol Here..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={fetchData}>Fetch Stocks</button>

      <div className="stocks">
        {stocks &&
          stocks.map((stock, index) => {
            return (
              <div className="stock" key={index}>
                <h2>{stock.companyName}</h2>
                <div className="details">
                  <p>Price: ${stock.price}</p>
                  <p>{stock.exchange}</p>
                  <p>{stock.industry}</p>
                  <p>{stock.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
