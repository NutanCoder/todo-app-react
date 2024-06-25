import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme='dark'>
      <div class="container">
        <Link class="navbar-brand" to="/">TodoApp</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/todos">Todo List</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/todos/create">Create Todo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;