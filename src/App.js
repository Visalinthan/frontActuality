import "./App.css";
import React, { useEffect, useState } from "react"
import Article from "./Articles";


const App = () => {

    const [news, setNews] = useState([])
    const menuItems = [...new Set()]

    const fetchNewsData = () => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-11-04&sortBy=publishedAt&apiKey=7a76bca50c1d4dd1bfae499697eea7b4")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setNews(data.articles)
            })
    }

    useEffect(() => {
        fetchNewsData()
    }, [])

    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent news !</h2>
                </div>
                <Article news={news}/>
            </div>
        </div>

    );
}


export default App;