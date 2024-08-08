const fetchTransactionList = async (url) => {
  try {
    // Make the GET request using fetch
    const response = await fetch(`${url}/transactions`);

    // Check if the response status is OK (status code 200 - 299)
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    // Parse the json data from the response
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle errors (e.g., network errors, response errors)
    console.error(`There was a problem with the fetch operation:`, error);
  }
};

export { fetchTransactionList };
