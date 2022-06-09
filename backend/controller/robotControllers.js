const { uArmSDK, findPort } = require('uarm-sdk-javascript');

const regexp = new RegExp(/Microsoft/i);

const acceptPortFn = (port) => regexp.test(port.manufacturer);

let exit = false;

const getPort = () => findPort(acceptPortFn).then(port => {
  const uarm = new uArmSDK({
    port,
    autoOpen: true,
    onError: (error) => {
      console.log("UARM Error", error);
    },
  });
  uarm.then(async () => {
    console.log("s-o deschis")
    const startPos = await uarm.getPosition();
    await uarm.moveRelative(0, 0, 80);
    await uarm.moveRelative(0, 0, -65);
    await uarm.movePolarRelative(0, -80, 0);
    await uarm.movePolarRelative(0, 160, 0);
    await uarm.movePolar(0, 90, 220);
    await uarm.move(startPos.x, startPos.y, startPos.z);
    // const response = await uarm.moveMotor(1, 45);
    // console.log(response);
  }).catch((error) => {
    console.error(error);
  });
}).catch((error) => {
  console.error(error);
  exit = true;
});

const keepAlive = function wait() {
  if (!exit) {
    setTimeout(wait, 1000);
  }
};
keepAlive();

module.exports = { getPort }