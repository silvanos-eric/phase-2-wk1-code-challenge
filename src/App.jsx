import { useState, useEffect } from "react";

import { Header, Main, Footer, Container } from "./components";

import { fetchTransactionList } from "./apis/fetchTransactionList";

import "./App.css";

const API_URL = "http://localhost:3000";

function App() {
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

  return (
    <Container clssName="p-3">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
