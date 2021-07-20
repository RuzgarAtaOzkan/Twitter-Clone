// MODULES
import React from 'react';
import { TiHomeOutline, TiHome } from 'react-icons/ti';

function Home({ active }) {
  return active ? <TiHome /> : <TiHomeOutline />;
}

export default Home;
