let connection;

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
    const movementCommands = {
      'w':  'Move: up',
      'a':  'Move: left',
      's':  'Move: down',
      'd':  'Move: right'
    };

    if (movementCommands.hasOwnProperty(key)) {
      console.log(movementCommands[key]);
      connection.write(movementCommands[key]);
    }

    // if (Object.prototype.hasOwnProperty.call(movementCommands, key)) {
    //   console.log(movementCommands[key]);
    // }
  }
};

module.exports = setupInput;