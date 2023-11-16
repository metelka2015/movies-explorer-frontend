import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import { Main } from "../Main/Main.js";
import { Movies } from "../Movies/Movies.js";
import { SavedMovies } from "../SavedMovies/SavedMovies.js";
import { Profile } from "../Profile/Profile.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { PageNotFound } from "../PageNotFound/PageNotFound.js";
  

function App() {
  const location = useLocation();  

  return (
    <div className="app">
      {location.pathname === '/' || location.pathname === '/saved-movies' || location.pathname === '/movies' || location.pathname === '/profile' ? (<Header />) : ('')}
          <main>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/saved-movies" element={<SavedMovies />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/signup" element={<Register />} />
                  <Route path="/signin" element={<Login />} />
                  <Route path="*" element={<PageNotFound />} />
              </Routes> 
          </main>
       {location.pathname === '/' || location.pathname === '/saved-movies' || location.pathname === '/movies' ? (<Footer />) : ('')}        
    </div>
    
  );
}

export default App;
