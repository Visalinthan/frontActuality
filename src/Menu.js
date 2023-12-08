import React, { useEffect, useState } from "react"


function Menu({ handleChange }) {

    const [source, setSources] = useState([])

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3001");
        socket.onopen = () => socket.send('sources');
        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            console.log("Received data from server:", data);
            setSources(data.sources)
        });
    }, [])


    return (
        <div className="flex-auto mb-5 my-20">
            <label for="source" class="block mb-2 text-md font-medium text-black-900 dark:text-black-400">Sources :</label>
            <select onChange={handleChange} id="source" class="bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="all">All</option>
                {source.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Menu