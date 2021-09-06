const Dai = artifacts.require("Dai.sol");
const Medicare = artifacts.require("Medicare.sol");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Dai);
    const dai = await Dai.deployed();
    await dai.faucet(accounts[0], web3.utils.toWei('10000'));
    await deployer.deploy(Medicare,dai.address);
};
