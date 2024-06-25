import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewPage() {
  const params = useParams();
  const todoId = params.id;

  const [data, setData] = useState({});

  const fetchTodo = async () => {
    const url = `https://api.nstack.in/v1/todos/${todoId}`;
    const options = {
      method: 'GET'
    };
    const response = await fetch(url, options);
    const body = await response.json();
    const data = body.data;
    setData(data);
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  if (data.title == null) {
    return <h5>Loading....</h5>
  }

  return (
    <div className="container">
      <div className="card my-4">
        <div className="card-header">
          {data.title}
        </div>
        <div className="card-body">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default ViewPage;