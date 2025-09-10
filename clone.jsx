import React, { useState } from "react";
import "./NetflixClone.css";

const movies = {
  trending: ["Extraction", "Stranger Things", "The Witcher"],
  blockbusters: ["Avengers: Endgame", "Inception"],
  horror: ["The Conjuring", "Insidious"],
  cartoon: ["Frozen", "Moana"],
};

export default function NetflixClone() {
  const [user, setUser] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [search, setSearch] = useState("");

  const handleLogin = () => {
    if (usernameInput.trim()) setUser(usernameInput.trim());
  };

  const filterMovies = (list) =>
    list.filter((m) => m.toLowerCase().includes(search.toLowerCase()));

  if (!user) {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <input
          className="input"
          placeholder="Enter your username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>Sign In</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">MaverickFlix</h1>
        <input
          className="input"
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main className="main">
        <h2>Welcome, {user}!</h2>

        {Object.entries(movies).map(([category, list]) => (
          <section key={category}>
            <h3 className="category-title">{category} Movies</h3>
            <div className="movie-grid">
              {filterMovies(list).map((title) => (
                <div key={title} className="movie-card">
                  <div className="movie-poster">{title}</div>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
