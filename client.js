const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.setEncoding('utf8')
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log(`welcome to snek`)
  })
  process.stdin.on('data', function(message){
    conn.write(message)
  })
  


  return conn;
};



module.exports = connect;