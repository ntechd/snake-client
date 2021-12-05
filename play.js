const {connect} = require("./client");
const{setupInput}=require("./input");
// establishes a connection with the game server
/*
const connect = function () {
	const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data",(data)=> {
    console.log(data);
  })
;
  return conn;
};

*/
console.log("Connecting ...");
const obj = connect();

/*
// setup interface to handle user input from stdin
const handleUserInput = function(key) {
  if(key==='\u0003')
    process.exit();

};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};
*/

setupInput(obj);