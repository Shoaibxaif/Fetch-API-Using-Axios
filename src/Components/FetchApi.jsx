import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [userdata, Setuserdata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        Setuserdata(response.data); // Update the userdata state
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1 className="d-flex justify-content-center">Fetch API Using Axios</h1>
        <hr />
        <div className="container">
          {userdata.map((data) => {
            return (
              <div key={data.id}>{data.name}-{data.username}</div> 
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchApi;
