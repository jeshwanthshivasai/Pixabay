import React, { useEffect, useState } from 'react';

export default function Pixabay() {
    let[api, setApi] = useState([]);
    let[search, setSearch] = useState("");
    let change = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        let api = fetch(``);
        api.then(res.json())
        .then(val  => setApi(val.hits))
    })

    return (
        <>
        <nav>
            <div  className="logo"> <img src="https://s.alamy.com/logos/1.68.0/alamy.svg" alt="alamy" /> </div>
            <ul className="nav-links">
                <div id="nav-right">
                    <input type="search" placeholder="Search here for Photos & Videos..." />
                    <span id="s1"> <button> Sign in </button>  </span>
                    <span id="s1"> <button> Sign up </button>  </span>
                </div>
            </ul>
        </nav>
        <div className='header-image'>
            <div>
                <h1>Pixabay</h1>
                <input type="text" name="" id="" placeholder='Search for anything...' onChange={change}/>
            </div>
        </div>
        </>
    )
}