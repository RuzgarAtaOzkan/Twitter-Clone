// MODULES
import React, { useEffect, useState } from 'react';

// API
import request from '../api/request';

// METHODS
import methods from '../api/methods';

// COMPONENTS
import HomeFeed from '../components/Feeds/Home';

function Home() {
  const [data, setData] = useState({});

  async function getPublicAPI(set) {
    try {
      const response = await request({
        endpoint: '',
        method: methods.GET,
        headers: {},
        body: {},
      });

      set(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPublicAPI(setData);
    return () => {};
  }, []);

  return (
    <>
      <HomeFeed data={data} />
    </>
  );
}

export default Home;
