import React, { useEffect, useState } from 'react';

export default function Pixabay() {
    let[api, setApi] = useState([]);
    let[search, setSearch] = useState("");
    let change = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        let api = fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
        api.then(res.json())
        .then(val  => setApi(val.hits))
    })

    return (
        <>
        <nav>
                <h1>pixabay</h1>
                <ul>
                    <div id="nav-p">
                        <li id="nav-items"><button>Explore</button></li>
                        <li id="nav-items"><button>Login</button></li>
                        <li id="nav-items"><button>Join</button></li>
                        <li id="nav-items"><button>Upload</button></li>
                    </div>
                </ul>
            </nav>
            <div className="header-image"></div>
            <div className="main-container">
                <h1 id="main-head-t">Stunning royalty-free images & royalty-free stock</h1>


                <h3>Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</h3>

                <input type="text" placeholder="Search for all images on Pixabay" onChange={change} />
                
                <select name="" id="select">
                    <option value="">All Images</option>
                    <option value="">Photos</option>
                    <option value="">Vectors</option>
                </select>
            </div>

            <div className="button-container">
                <button className="styled-button">Home</button>
                <button className="styled-button">Photos</button>
                <button className="styled-button">Gifs</button>
                <button className="styled-button">Illustrations</button>
            </div> <br />   <br />

            <div>
                <div id="last-container">
                    {api.filter(x => {
                        return (
                            x.tags.toLowerCase().includes(search)
                        )
                    })
                        .map(x => {
                            return (
                                <img src={x.webformatURL} id="lastImgae" />
                            )
                        })}

                </div>
            </div>
        </>
    )
}