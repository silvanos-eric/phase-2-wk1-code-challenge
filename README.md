# Table of Contents

- [Table of Contents](#table-of-contents)
- [Bank of Flatiron](#bank-of-flatiron)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
  - [Components](#components)
  - [Dependencies](#dependencies)
  - [Scripts](#scripts)
  - [Deployment](#deployment)
  - [License](#license)
  - [Authors](#authors)
  - [Acknowledgments](#acknowledgments)


# Bank of Flatiron

This is a simple banking application built with React, Vite, and React Bootstrap.

## Features

*   Transaction list with filtering and sorting
*   Add new transactions
*   Search transactions by description

## Installation

1.  Clone the repository: `git clone https://github.com/silvanos-eric/bank-of-flatiron.git`
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm run dev` or `yarn dev`
4.  Open the application in your browser: `http://localhost:3000`

## Usage

1.  Click on the "Add Transaction" button to add a new transaction.
2.  Enter the transaction details (date, description, category, and amount).
3.  Click on the "Add" button to save the transaction.
4.  Use the search bar to filter transactions by description.
5.  Click on the "Clear" button to clear the search filter.

## API

- The application uses a JSON API to store and retrieve transactions. The API is located at `http://localhost:3000/transactions`.
- In production the application uses `https://json-server-vercel-three-pearl.vercel.app` to store and retrieve data.

## Components

The application is built with the following components:

*   `App`: The main application component.
*   `Header`: The header component.
*   `Main`: The main content component.
*   `Footer`: The footer component.
*   `TransactionList`: The transaction list component.
*   `AddTransactionForm`: The add transaction form component.
*   `SearchTransactionForm`: The search transaction form component.

## Dependencies

The application uses the following dependencies:

*   `react`: The React library.
*   `vite`: The Vite development server.
*   `react-bootstrap`: The React Bootstrap library.
*   `bootstrap`: The Bootstrap CSS framework.

## Scripts

The application uses the following scripts:

*   `dev`: Starts the development server.
*   `build`: Builds the application for production.
*   `preview`: Previews the application in the browser.
*   `server`: Starts the json server.

## Deployment
The application has been deployed to the following web address
- [Live Site](https://phase-2-wk1-code-challenge-vert.vercel.app/)

## License

The application is licensed under the MIT License.

## Authors

The application was built by Eric Ouma.

## Acknowledgments

The application uses the following open-source libraries and frameworks:

*   React
*   Vite
*   React Bootstrap
*   Bootstrap

I would like to thank the authors and contributors of these libraries and frameworks for their hard work and dedication.
