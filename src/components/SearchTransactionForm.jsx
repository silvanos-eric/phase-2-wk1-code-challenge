import { useState } from "react";

import { Form, Button } from ".";

const SearchTransactionForm = ({ handleSearch }) => {
  // State to hold values
  const [formData, setFormData] = useState({
    searchText: "",
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formData.searchText);
  };

  return (
    <Form className="mb-3 d-flex gap-3" onSubmit={handleSubmit}>
      <Form.Control
        placeholder="transaction description"
        type="text"
        name="searchText"
        value={formData.searchText}
        onChange={handleChange}
      ></Form.Control>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export { SearchTransactionForm };
