import { useState, useEffect } from "react";

import { fetchTransactionList } from "../apis/fetchTransactionList.js";

import {
  Table,
  Button,
  TransactionList,
  SearchTransactionForm,
  AddTransactionForm,
} from ".";

const API_URL = "http://localhost:3000";

const Main = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadList = async () => {
      try {
        const list = await fetchTransactionList(API_URL);
        setTransactionList(list);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadList();
  }, []);

  function addNewTransaction() {}

  return (
    <main className="text-center">
      <h2>Transaction List</h2>
      <div className="d-flex justify-content-between">
        <SearchTransactionForm />
        <AddTransactionForm />
      </div>
      <TransactionList list={transactionList} />
    </main>
  );
};

export { Main };
