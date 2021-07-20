// MODULES
import React from 'react';
import { RiArticleFill, RiArticleLine } from 'react-icons/ri';

function Article({ active }) {
  return active ? <RiArticleFill /> : <RiArticleLine />;
}

export default Article;
