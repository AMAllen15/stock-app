import React, { useState, useEffect } from "react";
import { fetchNews } from "./FetchNews"; // Adjust the path as necessary

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_NEWSAPI_KEY); // This should log the API key
    const loadNews = async () => {
      const fetchedArticles = await fetchNews("stock market");
      setArticles(fetchedArticles);
    };

    loadNews();
  }, []);

  return (
    <div>
      <h2>Market News</h2>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
