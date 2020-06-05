# NGO Data protection using Blockchain Technology


## What is NGO_Xchange ?
NGO_Xchange is a platform to make NGO transaction secure and transparent. Main goal is to solve all conflicts arise in donor's mind and regain their trust towards NGO(Non-Government Organization).

## Features
- NGO's Paper work will be reduced.
- Transaction done by any user become transparent and secure.
- User can easily identify any fraudulent thread.
- All participant node can track transaction.


[0]: https://github.com/kp7742/AIKYAM/blob/master/logo.png?raw=true

## Tech Stack
- Ethereum
- Truffle
- React 
- Metamask browser extension


## Running it locally
  1. Install nodejs.
  2. For building local blockchain network install ganache.
  
  3. clone the repository ( Let download in folder name "final1")
  ```
   https://github.com/Raj142/NGO_Blockchain.git
  ```
  4. Install truffle globally and install all node dependencies
  ```
    npm install
    npm install -g truffle
  ```
  5. Compile and migrate to local blockchain network
  ```
   truffle compile
   truffle migrate
  ```
  6. Set path of  Mongo DB(USERNAME = username of your root(OS-X))
  ```
   /Users/"USERNAME"/Downloads/mongod/bin/mongod --dbpath=/Users/"USERNAME"/Downloads/mongodb-path
   mongo
  ```
  7. Connect to MongoDB 
  ```
   cd final1 
   npm run dev
  ```
  8. Run the server on localhost
  ```
   npm start
  ```

