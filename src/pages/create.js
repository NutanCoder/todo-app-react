import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    'title': '',
    'description': '',
    'is_completed': false
  });

  const onChangeHandler = (event) => {
    const element = event.target;
    const value = element.value;
    const name = element.name;
    const updatedPayload = { ...payload, [name]: value };
    setPayload(updatedPayload);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const url = 'https://api.nstack.in/v1/todos';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload)
    };
    const response = await fetch(url, options);
    const body = await response.json();
    console.log(body);
    navigate('/todos');
  };

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
          Create Page
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="mb-2">Title</label>
              <input type="text" name="title" className="form-control" onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="mb-2">Description</label>
              <input type="text" name="description" className="form-control" onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="mb-2">Status</label>
              <select name="is_completed" className="form-select" onChange={onChangeHandler}>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;