import './App.css'
import { Button } from '@mui/material'
import News from './components/News/News'
import { useEffect, useState } from 'react'
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=172a2a7192e44c51bf627a06620ffe62';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
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
