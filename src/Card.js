import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    //console.log(data);
    //console.log(data.slice(0, 4));
    setUsers(data.slice(0, 4));
    console.log(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-64 text-center my-72 mx-40 text-text">
      {users.map((user, index) => (
        <h1
          key={user.id}
          className="w-56 h-48 max-w-sm rounded-3xl overflow-hidden shadow-2xl pt-4 text-lg"
        >
          {user.name}
          <p className="text-sm mt-4">
            Username: {user.username}
            <br></br>
            Email: {user.email}
            <br></br>
            Phone: {user.phone}
            <br></br>
            Adress: {user.address.street + ", " + user.address.suite}
            <br></br>
            Website: {user.website}
          </p>
        </h1>
      ))}
    </div>
  );
};

export default Card;
