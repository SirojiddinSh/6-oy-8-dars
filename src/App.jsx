import "./App.css";
import { useReducer, useState, useEffect } from "react";
import Helmet from "react-helmet";

let reducer = (state, action) => {
    switch (action.type) {
        case "like":
            return [...state, action.product];
        case "Remove-From-liked":
            return state.filter((product) => product.id !== action.id);
        default:
            return state;
    }
};

function App() {
    let InitialState = [];
    let [state, dispatch] = useReducer(reducer, InitialState);
    let [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            fetch("https://dummyjson.com/products").then((res) =>
                res.json().then((data) => setProducts(data.products))
            );
        } catch (error) {
            console.log(error);
        }
    }, []);

    let handleLiked = (product) => {
        {
            liked ? "❤️" : "🤍";
        }
        dispatch({ type: "like", product: product });
    };

    let RemoveFromLiked = (id) => {
        {
            liked ? "❤️" : "🤍";
        }
        dispatch({ type: "Remove-From-liked", id });
    };

    const [liked, setLiked] = useState(false);
    let handleLike = () => {
        setLiked(!liked);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="body2">
                <div className="cards">
                    {products.map((product) => (
                        <div key={product.id} className="card">
                            <img width={200} src={product.images[0]} alt="" />
                            <h2>${product.price}</h2>
                            <h2>{product.title}</h2>
                            <div className="like">
                                <div
                                    className="like-button"
                                    onClick={handleLike}
                                >
                                    <span
                                        onClick={() => handleLiked(product)}
                                        role="img"
                                        aria-label="Heart Emoji"
                                    >
                                        🤍
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="liked">
                    <h2>Liked {state.length}</h2>
                    {state.map((product) => (
                        <div key={product.id} className="card">
                            <img width={200} src={product.images[0]} alt="" />
                            <h2>${product.price}</h2>
                            <h2>{product.title}</h2>
                            <div className="like">
                                <div
                                    className="like-button"
                                    // onClick={handleLike}
                                >
                                    <span
                                        onClick={() =>
                                            RemoveFromLiked(product.id)
                                        }
                                        role="img"
                                        aria-label="Heart Emoji"
                                    >
                                        ❤️
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
