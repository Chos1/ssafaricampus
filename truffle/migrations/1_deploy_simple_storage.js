const SimpleStorage = artifacts.require("SimpleStorage");
const Cash = artifacts.require("Cash");
const EscrowFactory = artifacts.require("EscrowFactory");
const PurchaseRecord = artifacts.require("PurchaseRecord");
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  // deployer.deploy(Cash);
  // deployer.deploy(PurchaseRecord);
  // deployer.deploy(EscrowFactory);
};
