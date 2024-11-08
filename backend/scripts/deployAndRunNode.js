const hre = require("hardhat");

async function main() {
  // Start a Hardhat network in-process
  console.log("Starting in-process Hardhat network...");

  // Deploy contract
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy("Hello, world!");
  

  console.log("MyContract deployed to:", myContract.address);

  // Optional: Interact with the contract immediately
  let greeting = await myContract.greet();
  console.log("Greeting:", greeting);
}

main()
  .then(() => {
    console.log("Node and contract deployed. Keeping the node running...");
    return new Promise(() => {}); // Keeps the script running
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
