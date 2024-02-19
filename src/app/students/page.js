"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Handle success response
    } catch (error) {
      console.error(error); // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
      />
      <br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <br />
      <input
        type="number"
        name="marks"
        value={formData.marks}
        onChange={handleChange}
        placeholder="Marks"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
