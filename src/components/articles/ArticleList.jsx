import {useEffect, useContext } from 'react';
import ArticleContext from '../../Contexts/article/ArticleContext';

const ArticleList = () => {

    const {articles, getArticles, deleteOneArticle} = useContext(ArticleContext)
    
    

    

    useEffect(() => {
        getArticles()
    },[])

    return (
        <>
            <h1>Show All Articles</h1>
            <hr />
            {articles && articles.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <button onClick={() => deleteOneArticle(article.id)} className="btn btn-danger btn-sm">delete</button>
                    <hr />
                </div>
            ))}
        </>
        
    )
}

export default ArticleList