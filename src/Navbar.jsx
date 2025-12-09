import React from "react";

export default function Navbar() {
return(
    <nav>
    <div className="navbar">
    <h1>Manga-bibl</h1>    <div className="links">
        <a href="/"><i className="fa-regular fa-house"></i></a>
        <a href="/favorites"><i className="fa-regular fa-heart"></i></a>
        <a href="/profile"><i className="fa-solid fa-user-ninja"></i></a>
    </div>
    </div>
    </nav>
)
};