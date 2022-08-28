import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  });
  return (
    <div className="App">
      {users.length > 0
        ? users.map((elt) => <Card key={elt.id} user={elt}></Card>)
        : "Loading..."}
    </div>
  );
}

export default App;
