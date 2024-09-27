// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import Login from './Login';
// // import Footer from './components/Footer';

// // function App() {
// //   const [images,setImages] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const fetchImages = async () => {
// //       const response = await fetch(`https://pixabay.com/api/?key=${'46193678-548a763bb419072e45a9aa1b3'}&q=${searchTerm}&image_type=photo&pretty=true`);
// //       const data = await response.json();
// //       setImages(data.hits);
// //   };

// //   useEffect(() => {
// //     fetchImages();
// //   }, [searchTerm]);

// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <nav className="navbar">
// //           <div className="navbar-container">
            
// //             <Link to="/" className="navbar-logo">
// //               Pixabay Search
// //             </Link>
// //             <ul className="navbar-menu">
// //               <li className="navbar-item">
// //                 <Link to="/" className="navbar-link">Home</Link>
// //               </li>
// //               <li className="navbar-item">
// //                 <Link to="/login" className="navbar-link">Login</Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </nav>
// //         <Routes>
          
// //           <Route path="/" element={
// //             <div id="bac">
// //               <h1>Pixabay Image Search</h1>
// //               <input
// //                 type="text"
// //                 placeholder="Search for images..."
// //                 value={searchTerm}
// //                 onChange={handleSearchChange}
// //               />

// //               <div className="grid-container">
// //                 {images.length > 0 ? (
// //                   images.map((image) => (
// //                     <div key={image.id} className="grid-item">
// //                       <img src={image.webformatURL} alt={image.tags} />
// //                       <p>{image.tags}</p>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No images found</p>
// //                 )}
// //               </div>
// //             </div>
// //           }/>

// //           <Route path="/login" element={<Login />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import PhotoDisplay from './components/PhotoDisplay';
// import LoginForm from './RoutedPages/LoginForm';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <div id="bac">
//         <PhotoDisplay />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Pixabay from "./components/Pixabay";
import './App.css';

 export default function App() {
    return (
        <div>
            <Pixabay/>
        </div>
    );
}