const IP = 'localhost';
const PORT = 50541;

const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const MESSAGE_1_KEY = '1';
const MESSAGE_2_KEY = '2';
const MESSAGE_MAPPINGS = {
  [MOVE_UP_KEY]:  'Move: up',
  [MOVE_LEFT_KEY]:  'Move: left',
  [MOVE_DOWN_KEY]:  'Move: down',
  [MOVE_RIGHT_KEY]: 'Move: right',
  [MESSAGE_1_KEY]:  'Say: Hello, everyone!',
  [MESSAGE_2_KEY]:  'Say: Hooray! I won!'
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGE_1_KEY,
  MESSAGE_2_KEY,
  MESSAGE_MAPPINGS
};