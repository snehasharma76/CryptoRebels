const Patreon = artifacts.require("Patreon");

module.exports = async function (deployer) {
  await deployer.deploy(Patreon);
};
