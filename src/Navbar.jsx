import {useState} from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen((prev) => !prev);
  return (
    <nav>
      <div className="navbar">
        <h1>Manga-bibl</h1>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${open ? "open" : ""}`}>
          <a href="/">
            <i className="fa-regular fa-house"></i>
          </a>
          <a href="/favorites">
          <i class="fa-solid fa-book"></i>
          </a>
          <a href="/profile">
            <i className="fa-solid fa-user-ninja"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
