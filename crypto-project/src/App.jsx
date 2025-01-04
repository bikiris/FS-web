import { useState, useEffect } from 'react';

const App = () => {
  //objective: to display all the supported coins

  //useState variable to save the fetched information
  const [coins, setCoins] = useState([]);

  //useState stores user search input
  const [searchString, setSearchString] = useState('');

  //useState that contains filtered data
  const [filteredCoins, setFilteredCoins] = useState([]);

  const [page, setPage] = useState(1);

  //fetches all the coins from the API endpoint
  const fetchCoins = async () => {
    //fetch 'get' template
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const data = await response.json();

    //log the data to see the example response in the console
    console.log(data);
    //store the fetched the data
    setCoins(data);
    setPage(1);

    const coinPage = data.slice((page-1) * 10, page*10);
    console.log(coinPage);

    // 1 -> 0...9
    // 2 -> 10...19

    setFilteredCoins(coinPage);
  }

  //when the site is loaded, this part code runs
  useEffect(() => {
    //we want to immediately fetch the coins when the website loads
    fetchCoins();
  },[])

  const searchCoin = (e) => {
    //store the search string
    setSearchString(e.target.value);
    //looping our original data to compare coin name that matches, it stores it as array
    const matchedCoins = coins.filter( (coin) => {
      return coin.name.toLowerCase() === e.target.value.toLowerCase();
    })
    setFilteredCoins(matchedCoins)

    //when we are not searching, reset everything to first page
    if(e.target.value === ""){
      setPage(1);
      const coinPage = coins.slice((page-1) * 10, page*10);
      setFilteredCoins(coinPage);
    }
  }

  const goPrevPage = () => {
    if(page === 1) return; //cannot go prev like page 0
    const currentPage = page-1;
    //increment the page
    setPage(currentPage);
    //update the page
    const coinPage = coins.slice((currentPage-1) * 10, currentPage*10);
    setFilteredCoins(coinPage);
  }

  const goNextPage = () => {
    const currentPage = page+1;
    //increment the page
    setPage(currentPage);
    //update the page
    const coinPage = coins.slice((currentPage-1) * 10, currentPage*10);
    setFilteredCoins(coinPage);
  }

  return (
    <div>
      <p>Cryptocurrencies</p>

      {/* search bar */}
      <input type='text' onChange={(e) => searchCoin(e)}/>
      <p> Search String : {searchString}</p>

      {/* array size greater than 0, render the following div*/}
      {filteredCoins.length > 0 && 
        <div>
          {filteredCoins.map( (coin) => {
            return <CoinInfo key={coin.id} name={coin.name} symbol={coin.symbol} />
          })}
        </div>
      }
      {page !== 1 && <button>Prev Page</button>}
      <p>Current Page: {page}</p>
      <button onClick={goNextPage}>Next Page</button>
    </div>
  )
};


const CoinInfo = ({name, symbol}) => {
  return (
    <div style={{border:'1px solid red'}}>
      <p>Coin : {name}</p>
      <p>Symbol : {symbol}</p>
    </div>
  )
}

export default App;
