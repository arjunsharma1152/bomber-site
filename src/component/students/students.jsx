import React, { useState } from "react";
import { stu } from "./stu-data";

const Students = () => {
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === "LaudaLassan") {
      for (let i = 0; i < stu.length; i++) {
        formData.number = stu[i];
        fetch("https://weakdefinitivealgorithm.arjunsharma1152.repl.co/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            console.log("Response:", response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      window.alert("Gend phaad di tune toh");
    } else {
      window.alert("Wrong password");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Ready to Bang Bang!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Students;
