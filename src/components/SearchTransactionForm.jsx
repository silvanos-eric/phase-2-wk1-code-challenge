import { useState } from "react";

import { Form, Button } from ".";

const SearchTransactionForm = ({ onSearch }) => {
  // State to hold values
  const [searchText, setSearchText] = useState("");

  // Handle form input changes
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  const handleClear = () => {
    setSearchText("");
    onSearch("");
  };

  return (
    <Form className="mb-3 d-flex gap-3" onSubmit={handleSubmit}>
      <Form.Control
        placeholder="transaction description"
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleChange}
      ></Form.Control>
      <Button type="submit">Search</Button>
      <Button type="button" variant="danger" onClick={handleClear}>
        Clear
      </Button>
    </Form>
  );
};

export { SearchTransactionForm };
