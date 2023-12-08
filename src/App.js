import "./App.css";
import React, { useEffect, useState } from "react"
import Article from "./Articles";
import Menu from "./Menu";

const App = () => {

    const [news, setNews] = useState([])
    let request = [{ key: "all", value: "all" }]

    const socket = new WebSocket("ws://localhost:3001");

    function getData(request) {
        const jsonRequest = JSON.stringify(request)
        socket.send(jsonRequest)
        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            console.log("Received data from server:", data);
            setNews(data.articles)
        });
    }

    function handleChange(e) {
        if (e.target.id === "source") {
            request = [{ key: "one_source", value: e.target.value }]
        } else if (e.target.id === "category") {
            request = [{ key: "category", value: e.target.value }]
        }
        getData(request)
    };


    useEffect(() => {
        socket.onopen = () => getData(request)
    }, [])

    return (
        <div className="bg-white py-10 sm:py-15">
            <div className="mx-auto max-w-7xl px-2 lg:px-5">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent news !</h2>
                    <Menu handleChange={handleChange} />
                </div>
                <Article news={news} />
            </div>
        </div>
    );
}


export default App;