require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      // No URL or accounts needed for the built-in Hardhat network
    },
    // Optional: Configure a separate localhost network if you want to connect an external application to the Hardhat node
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
