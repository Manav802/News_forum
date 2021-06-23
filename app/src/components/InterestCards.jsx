

import React, { useEffect, useState } from 'react';

import InterestSecCard from './InterestSecCard';

function InterestCards() {

  var url =
    'http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793';
  var req = new Request(url);
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(req)
      .then((res) => res.json())
      
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  }, []);
  var news = item.articles;

  console.log(news);
  return (
    <div className= "row card-group">
      {news
        ? news.map((news) => <InterestSecCard data={news} key={news.url} />)
        : 'loading'}
    </div>
  );
}
export default InterestCards;
