import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function InterestStudents() {

  const url = "http://localhost:3000/api/publications/"

  const [publication, setPublication] = useState([]);

  const loadPublication = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setPublication(data);
  };

  useEffect(() => {
    loadPublication();
  }, []);

  return (
    <div className="container">
      <table class="table table-striped table-hover table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InterestStudents;
