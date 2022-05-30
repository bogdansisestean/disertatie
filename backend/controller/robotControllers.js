const { uArmSDK, findPort } = require('uarm-sdk-javascript');

const regexp = new RegExp(/Arduino/i);
const acceptPortFn = (port) => regexp.test(port.manufacturer);

const getPort = () => findPort(acceptPortFn).then(port => {
    const uarm = new uArmSDK({
        port,
        autoOpen: false,
        onError: (error) => {
            console.log("uArm Error: ", error);
        },
    });

    uarm.open().then(async () => {
        const position = await uarm.getPosition();
        console.log("uArm current position is: ", position);
    });
});

module.exports = { getPort }