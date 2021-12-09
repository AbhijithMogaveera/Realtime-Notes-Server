import Container from "typedi";
import { ExpressHelper } from "../di/ExpressHelper";
import http from "http";
import * as socketio from "socket.io";

let app = Container.get(ExpressHelper);
let server = http.createServer(app.app);
let io = new socketio.Server(server);
var port = process.env.PORT || 5000;

class HandShake {
  msg: String;
  constructor(msg: String) {
    this.msg = msg;
  }
}

io.on("connection", (socket) => {

  socket.emit("createMessage", new HandShake("hii"));

  socket.on("createMessage", (newMessage) => {
    console.log("newMessage", newMessage);
  });

  console.log("Connected to server");
  
});

server.listen(port);

console.log("---------------------------------------");
