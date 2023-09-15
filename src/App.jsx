import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((json) => setData(json.users));
  }, []);

  console.log(data);

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
      {data.map((user) => (
        <li key={user.id}>
          <img src={user.image} alt="photo" />
          <p>{user.firstName} {user.lastName}</p>
          <p></p>
        </li>
      ))}
    </ul>
  );
}

export default App;
