const net = require("net");
const {IP,PORT} = require("./constants");
const connect = function () {
	const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data",(data)=> {
    console.log(data);
  });

  conn.on("connect",(data)=>{
    console.log("Successfully connected to game server");
    conn.write("Name: NAJ");
    // conn.write("Move: up");
  });
  return conn;
};


module.exports = {
	connect
};