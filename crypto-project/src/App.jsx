import { useState, useEffect } from 'react';

const App = () => {

  //objective: to display all the supported coins

  //useState variable to save the fetched information
  const [coins, setCoins] = useState([]);

  //fetches all the coins from the API endpoint
  const fetchCoins = async () => {
    //fetch 'get' template
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const data = await response.json();

    //log the data to see the example response in the console
    console.log(data);
    //store the fetched the data

    setCoins(data);

   
  }

  //when the site is loaded, this part code runs
  useEffect(() => {
    //we want to immediately fetch the coins when the website loads
    fetchCoins();
  },[])


  return (
    <div>
      <p>Cryptocurrencies</p>
      {/* array size greater than 0, render the following div*/}
      {coins.length > 0 && 
        <div>
          <div style={{border:'1px solid red'}}>
            <p>Coin : {coins[0].name}</p>
            <p>Symbol : {coins[0].symbol}</p>
          </div>
          <div style={{border:'1px solid red'}}>
            <p>Coin : {coins[1].name}</p>
            <p>Symbol : {coins[1].symbol}</p>
          </div>
          <div style={{border:'1px solid red'}}>
            <p>Coin : {coins[2].name}</p>
            <p>Symbol : {coins[2].symbol}</p>
          </div>
        </div>
      }
    </div>
  )
};

export default App;
