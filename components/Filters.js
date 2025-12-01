"use client";
import React, { useState } from "react";

const Filters = ({ filteredFn }) => {
  const [values, setValues] = useState({
    startDate: "",
    endDate: "",
    minPrice: "",
    email: "",
    phone: "",
  });
  function updateInputs(field, value) {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    filteredFn(newValues);
  }

  return (
    <div>
      <h1>Filters</h1>
      <form>
        <input
          type="date"
          value={values.startDate}
          onChange={(e) => updateInputs("startDate", e.target.value)}
        />

        <input
          type="date"
          value={values.endDate}
          onChange={(e) => updateInputs("endDate", e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Price"
          value={values.minPrice}
          onChange={(e) => updateInputs("minPrice", e.target.value)}
        />

        <input
          type="email"
          placeholder="Customer Email"
          value={values.email}
          onChange={(e) => updateInputs("email", e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={values.phone}
          onChange={(e) => updateInputs("phone", e.target.value)}
        />
      </form>
    </div>
  );
};

export default Filters;
