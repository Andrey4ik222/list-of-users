import "./Users.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="users-wrapper">
      {users.map((elem) => (
        <div className="user" key={elem.id}>
          <p>Name: {elem.name}</p>
          <p>Username: {elem.username}</p>
          <p>Email: {elem.email}</p>
          <div className="btn-wrapper">
            <button>
              <Link to={`/albums/${elem.id}`}>Album</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Users;
