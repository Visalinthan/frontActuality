import "./App.css";
import React, { useEffect, useState } from "react"
import Article from "./Articles";
import Menu from "./Menu";
import axios from "axios";


const App = () => {

    const [news, setNews] = useState([])

    const baseURL = "https://newsapi.org/v2"

    const keyApi = '3ae6c7ef47764a919093ed68658ba917'

    let request = `everything?q=keyword`

    function getData(request) {
        return axios.get(`${baseURL}/${request}&apiKey=${keyApi}`).then((response) => {
            setNews(response.data.articles)
        })
    }

    function handleClick(e) {

        let value = e.currentTarget.id

        request = (value !== "all") ? `top-headlines?category=${value}` : `everything?q=keyword`

        getData(request)

    };

    useEffect(() => {
        getData(request)
    }, [request])


    return (

        <div className="bg-white py-10 sm:py-15">
            <div className="mx-auto max-w-7xl px-2 lg:px-5">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent news !</h2>
                    <Menu handleClick={handleClick} />
                </div>
                <Article news={news} />
            </div>
        </div>

    );
}


export default App;