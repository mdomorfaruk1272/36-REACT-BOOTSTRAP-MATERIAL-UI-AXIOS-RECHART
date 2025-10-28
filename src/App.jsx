import axios from 'axios';
import './App.css'
import News from './components/News/News'
import { useEffect, useState } from 'react'
function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
   axios(url)
   .then(data => setArticles(data.data.articles));
  }, [])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News key={Math.random()} article={article}></News>)
      }
    </div>
  )
}

export default App
