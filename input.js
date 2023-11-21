let connection;
const constants = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else {

    if (constants.MESSAGE_MAPPINGS.hasOwnProperty(key)) {
      const message = constants.MESSAGE_MAPPINGS[key];
      console.log(message);
      connection.write(message);
    }

    // if (Object.prototype.hasOwnProperty.call(movementCommands, key)) {
    //   console.log(movementCommands[key]);
    // }
  }
};

module.exports = setupInput;