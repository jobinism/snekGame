let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up")
  } else if (key === 'a') {
    connection.write("Move: left")
  } else if (key === 's') {
    connection.write("Move: down")
  } else if (key === 'd') {
    connection.write("Move: right")
  } else if (key === 'g') {
    connection.write("Say: Too slow ")
  } else if (key === 't') {
    connection.write("Say: What's up")
  } else if (key === 'f') {
    connection.write("Say: Nice try")
  } else if (key === 'h') {
    connection.write("Say: I win")
  }
}

module.exports = setupInput;