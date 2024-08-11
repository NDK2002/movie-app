import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import MovieDetail from "../pages/MovieDetail";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";
import DevelopingPage from "../pages/DevelopingPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <MainLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="movie/popular" element={<HomePage />} />
        <Route path="movie/now-playing" element={<HomePage />} />
        <Route path="movie/upcoming" element={<HomePage />} />
        <Route path="movie/top-rated" element={<HomePage />} />
        <Route path="movie/:movieId" element={<MovieDetail />} />
        <Route path="tv/*" element={<DevelopingPage />} />
        <Route path="person" element={<DevelopingPage />} />
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
