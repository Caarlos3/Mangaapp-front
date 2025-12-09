import "./App.css";
import { useState } from "react";

const API_BASE_URL = "https://mymangapp-backend-production.up.railway.app";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/manga?query=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Error al llamar a la API");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "100px",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div className="grid"></div>

        <form id="poda" onSubmit={handleSearch}>
          <div className="glow"></div>
          <div className="darkBorderBg"></div>
          <div className="darkBorderBg"></div>
          <div className="darkBorderBg"></div>

          <div className="white"></div>
          <div className="border"></div>

          <div id="main">
            <input
              placeholder="Search..."
              type="text"
              name="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div id="input-mask"></div>
            <div id="pink-mask"></div>

            <div
              id="search-icon"
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                height="24"
                fill="none"
                className="feather feather-search"
              >
                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                <line
                  stroke="url(#searchl)"
                  y2="16.65"
                  y1="22"
                  x2="16.65"
                  x1="22"
                ></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stopColor="#f8e7f8" offset="0%"></stop>
                    <stop stopColor="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stopColor="#b6a9b7" offset="0%"></stop>
                    <stop stopColor="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </form>

        <div
          className="resultados"
          style={{ marginTop: "40px", width: "100%", maxWidth: "900px" }}
        >
          <h2 style={{ color: "white" }}>Mangas encontrados</h2>

          {loading && (
            <p style={{ textAlign: "center", color: "#aaa" }}>
              Buscando mangas...
            </p>
          )}

          {error && (
            <p style={{ textAlign: "center", color: "tomato" }}>
              Error: {error}
            </p>
          )}

          <ul className="results-list">
            {results.map((manga, index) => (
              <li
                key={manga.malId ?? `${manga.title}-${index}`}
                className="result-item"
              >
                {manga.imageUrl && (
                  <img
                    src={manga.imageUrl}
                    alt={manga.title}
                    className="manga-image"
                  />
                )}
                <div className="manga-info">
                  <h3>{manga.title}</h3>
                  {manga.score && <p>Score: {manga.score}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;