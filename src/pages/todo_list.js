import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const url = 'https://api.nstack.in/v1/todos';
    const options = {
      method: 'GET'
    };
    const response = await fetch(url, options);
    const body = await response.json();
    const items = body.items;
    setTodos(items);
  }

  const deleteHandler = async (id) => {
    const url = `https://api.nstack.in/v1/todos/${id}`;
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(url, options);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (todos == null) {
    return (
      <div className="container">
        <h4>Loading..</h4>
      </div>
    );
  }

  return (
    <div className="container my-2">
      <h1>TodoList</h1>
      <div className="row">
        {
          todos.map(function (todo) {
            return (
              <div className="col-md-6 col-lg-4">
                <div className="card my-2">
                  <div className="card-header">
                    {todo.title}
                  </div>
                  <div className="card-body">
                    {todo.description}
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <Link className="btn btn-primary" to={`/todos/view/${todo._id}`}>View</Link>
                    <Link className="btn btn-warning" to={`/todos/edit/${todo._id}`}>Edit</Link>
                    <button className="btn btn-danger" onClick={() => deleteHandler(todo._id)}>Delete</button>
                  </div>
                </div>
              </div>
            )
          })
        }

        {
          todos.length == 0 ? <>No Data</> : <></>
        }
      </div>
    </div>
  );
}

export default TodoList;