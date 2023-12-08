import React, { useEffect, useState } from "react"


function Menu({ handleChange }) {

    const [source, setSources] = useState([])

    const category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3001");

        const request = [{ key: "list_sources", value: "sources" }]
        const jsonRequest = JSON.stringify(request)
        socket.onopen = () => socket.send(jsonRequest);

        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            console.log("Sources :", data);
            setSources(data.sources)
        });
    }, [])


    return (
        <div className="flex-auto mb-5 my-20">
            <label htmlFor="source" className="block mb-2 text-md font-medium text-black-900 dark:text-black-400">Sources :</label>
            <select onChange={handleChange} id="source" className="my-5 bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="all">All Sources</option>
                {source.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))}
            </select>

            <label htmlFor="source" className="block mb-2 text-md font-medium text-black-900 dark:text-black-400">Category :</label>
            <select onChange={handleChange} id="category" className="text-transform: capitalize my-5 bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="all">All Category</option>
                {category.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Menu