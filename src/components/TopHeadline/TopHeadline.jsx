import { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const apiKey = '172a2a7192e44c51bf627a06620ffe62';
        const url = ' https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;