import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Analysis.module.css';

import RealTime from '../../components/Realtime/RealTime';

const Data = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
          <div className='coin-app'>
            <main className='' id='search-bar'>
      {/* <div className='coin-searchh'> */}
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input w-300 h-50 rounded-4 pr-20 py-2 pl-2
             border-none bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-gray-300'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      {/* </div> */}
      </main>
      {filteredCoins.map(coin => {
        return (
          <RealTime
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default Data;