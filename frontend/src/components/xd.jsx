import React, { useState, useEffect } from "react";
import axios from "axios";

function DasTable({}) {
  const [data, setData] = useState({}); // State to hold the single object

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/prices")
      .then((res) => {
        const { outerObject } = res.data;
        console.log(outerObject);// Destructure outerObject if present
        setData(outerObject || {}); // Set empty object if outerObject doesn't exist
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <>
      
        <table className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* Define table headers based on nested object properties */}
              <th>Name</th>
              <th>Price</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([objectName, nestedObject]) => (
              <tr key={objectName}>
                <td>{nestedObject?.name}</td> {/* Optional chaining for nested properties */}
                <td>{nestedObject?.price}</td>
                <td>{nestedObject?.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  );
}

export default DasTable;
