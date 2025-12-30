import React, { useState, useEffect } from "react";
import NewsIteam from "./NewsIteam";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a2dad8b65cd94469b018816908c58a2e`
    )
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      });
  }, [category]);

  return (
    <div>
      <p>{category} News</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}
      >
        {articles.map((news, index) => (
          <NewsIteam key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}/>
        ))}
      </div>
    </div>
  );
};

export default News;
