import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="row text-center py-5">
          <div className="col">
            <h1 className="display-4">Welcome to TodoApp</h1>
            <p className="lead">A simple and effective way to manage your tasks.</p>
            <Link to="/todos/create">
              <button className="btn btn-primary btn-lg m-2">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-check-circle display-4"></i>
            <h2>Easy to Use</h2>
            <p>Manage your tasks with a simple and intuitive interface.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-lock display-4"></i>
            <h2>Secure</h2>
            <p>Your tasks are safe and secure with our app.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-phone display-4"></i>
            <h2>Accessible</h2>
            <p>Access your tasks from any device, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
