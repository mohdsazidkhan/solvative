import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import Table from './Table';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function getData(){
      if (query.trim() === '') return;
      setLoading(true);
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_BASE_URL}/geo/cities`,
        params: {
          namePrefix: query,
          limit: limit,
          offset: offset
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_API_HOST
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data , ' response.data');
        setCities(response.data.data);
        setTotalCount(response.data.metadata.totalCount);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, limit, offset]);

  
  return (
    <div className="app">
      <SearchBox setQuery={setQuery} />
      <Table cities={cities} loading={loading} />
      <Pagination 
        totalCount={totalCount} 
        offset={offset} 
        limit={limit} 
        setOffset={setOffset} 
        setLimit={setLimit} 
      />
    </div>
  );
};

export default App;
