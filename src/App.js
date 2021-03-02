import './App.css';
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [stocks, setStocks] = useState(null)

  const fetchData = async () =>  {
    const apiURL = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=5f19ea882fea37e649bdc3230aa7ed2c'
    
    const response = await axios.get(apiURL)
    setStocks(response.data)
    console.log(response.data)
  }

  return (
    <div className="App">
      

    <button onClick={fetchData}>Fetch Stocks</button>
    </div>
  );
}

export default App;
