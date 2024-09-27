import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ImageWebsite() {
    let[api, setApi] = useState([]);
    let[search, setSearch] = useState("");
    let change = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`)
        .then(res => res.json())
        .then(val  => setApi(val.hits))
        .catch(err => console.error("Error Fetching Data", err));
    }, [search])

    return (
        <>
            <nav>
                <h1>Pixabay</h1>
                <ul>
                    <div id="nav-p">
                        <li id="nav-items"><button>Explore</button></li>
                        <Link to="/login" > <li id="nav-items"><button>Login</button></li> </Link>
                        <Link to="/regex" > <li id="nav-items"><button>Sign Up!</button></li> </Link>
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

            </div> 

            <br /> 
            <br />
            
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

            <div className="footer">
                <p className="footer-text">&copy; Alamy 2022</p>
            </div>
        </>
    )
}