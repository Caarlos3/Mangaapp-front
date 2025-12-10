import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" onClick={() => setOpen(false)}>
            <i className="fa-regular fa-house"></i>
          </Link>

          <Link to="/leidos" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-book"></i>
          </Link>

          <Link to="/profile" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-user-ninja"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
