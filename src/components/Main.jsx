import { useState, useEffect } from "react";

import { fetchTransactionList } from "../apis";

import { TransactionList, SearchTransactionForm, AddTransactionForm } from ".";

const API_URL = "http://localhost:3000";

const Main = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadList = async () => {
      try {
        const list = await fetchTransactionList(API_URL);
        setTransactionList(list);
        setFilteredTransactionsList(list);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadList();
  }, []);

  const handleSearch = (searchText) => {
    setSearchQuery(searchText);
  };

  const handleAdd = (transaction) => {
    setTransactionList([...transactionList, transaction]);
  };

  // Filter the transactionList based on the search query
  const filteredTransactionList = transactionList.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="text-center">
      <h2>Transaction List</h2>
      <div className="d-flex justify-content-between">
        <SearchTransactionForm onSearch={handleSearch} />
        <AddTransactionForm onAdd={handleAdd} />
      </div>
      <TransactionList list={filteredTransactionList} />
    </main>
  );
};

export { Main };
