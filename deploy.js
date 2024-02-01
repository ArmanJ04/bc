const { ethers } = require("hardhat");

async function main() {
  const SimpleDAO = await ethers.getContractFactory("SimpleDAO"); // Updated line
  const simpleDAO = await SimpleDAO.deploy();

  await simpleDAO.deployed();

  console.log("SimpleDAO deployed to:", simpleDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
