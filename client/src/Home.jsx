import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to Our App</h1>
        <p className="lead mt-3">
          This is a simple home page where you can add your dashboard, user
          details, or any feature you want.
        </p>
        <hr className="my-4" />
        <p>Use the navigation bar to explore different features.</p>
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>
        <Link to="/register" className="btn btn-outline-secondary btn-lg ms-3">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
