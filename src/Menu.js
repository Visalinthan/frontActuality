import React from "react"

function Menu({ handleClick }) {

    var menuItems = ['all', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']


    return (
        <div className="flex-auto mb-5 my-20">
            {menuItems.map((item, index) => (
                <button key={index} onClick={handleClick} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" id={item}>{item}</button>
            ))}
        </div>
    );
}

export default Menu