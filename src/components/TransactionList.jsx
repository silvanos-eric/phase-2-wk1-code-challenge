import { Table } from ".";

const TransactionList = ({ list }) => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {list.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export { TransactionList };
