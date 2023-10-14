import "./table.css";
import { useEffect, useState } from "react";

export function Task4() {
  const [users, setUsers] = useState([]);
  const URL = "https://dummyjson.com/users";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users); 
      })
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>ProfilePic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={user.firstName} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td style={{ maxWidth: '200px', whiteSpace: 'nowrap' }}>
                {user.ip}
              </td>
              <td style={{ maxWidth: '400px', whiteSpace: 'nowrap' }}>
                {user.university}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
