import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const navigate = useNavigate();
  const params = useParams();
  const todoId = params.id;

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const [payload, setPayload] = useState({
    'title': '',
    'description': '',
    'is_completed': false
  });

  const fetchTodo = async () => {
    const url = `https://api.nstack.in/v1/todos/${todoId}`;
    const options = {
      method: 'GET',
    };
    const response = await fetch(url, options);
    const body = await response.json();
    const data = body['data'];
    const updatedPayload = {
      'title': data['title'],
      'description': data['description'],
      'is_completed': data['is_completed'],
    }
    setPayload(updatedPayload);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onChangeHandler = (event) => {
    const element = event.target;
    const value = element.value;
    const name = element.name;
    const updatedPayload = { ...payload, [name]: value };
    setPayload(updatedPayload);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setisButtonClicked(true);
    const url = `https://api.nstack.in/v1/todos/${todoId}`;
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    const response = await fetch(url, options);
    const body = await response.json();
    const data = body.data;
    navigate('/todos')
  }

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
          <h1>Edit Page</h1>
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="mb-2">Title</label>
              <input type="text" name="title" className="form-control" value={payload.title} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="mb-2">Description</label>
              <input type="text" name="description" className="form-control" value={payload.description} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="mb-2">Status</label>
              <select name="is_completed" className="form-select" value={payload.is_completed} onChange={onChangeHandler}>
                <option value="">Select Status</option>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" disabled={isButtonClicked}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPage;