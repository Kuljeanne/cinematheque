import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/elements/Main/Main";
import History from "./components/pages/History/History";
import Favorites from "./components/pages/Favourites/Favourites";
import SearchResults from "./components/pages/SearchResults/SearchResults";
import MovieInfo from "./components/pages/MovieInfo/MovieInfo";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="favourites" element={<Favorites />} />
          <Route path="history" element={<History />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="movie" element={<MovieInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
