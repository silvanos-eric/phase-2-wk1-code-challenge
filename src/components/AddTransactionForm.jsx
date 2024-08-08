import { useState, useRef } from "react";

import { Form, Button, Modal } from ".";

const AddTransactionForm = ({ onAdd }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    date: undefined,
    description: "one",
    category: "",
    amount: 0,
  });
  const submitBtnRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "amount") {
      setFormData({
        ...formData,
        amount: Number.parseInt(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  function submit() {
    submitBtnRef.current.click();
  }

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Add Transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                name="date"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                name="amount"
                required
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="visually-hidden"
                ref={submitBtnRef}
              ></Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { AddTransactionForm };
