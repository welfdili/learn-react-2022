import { useReducer } from "react";
import ArticleContext from "./ArticleContext";
import articleReducer from "./ArticleReducer";
import { getAllArticles, deleteArticle } from "./ArticleActions";
import { GET_ARTICLES, DELETE_ARTICLE } from "./ArticleTypes";


const ArticleProvider = ({ children }) => {
    const initState = {
        articles: [],
    };
    const [state, dispatch] = useReducer(articleReducer, initState);

    const getArticles = async() => {
        let payload = await getAllArticles();
        dispatch({ type: GET_ARTICLES, payload });
        
    }
    const deleteOneArticle = async (id) => {
        let status = await deleteArticle(id)
        if (status === 200) {
            dispatch({ type: DELETE_ARTICLE, payload: id });
        }
    }

    return (
        <ArticleContext.Provider
            value={{
                articles: state.articles,
                getArticles,
                deleteOneArticle,
            }}
        >
            {children}
        </ArticleContext.Provider>
    );
};

export default ArticleProvider