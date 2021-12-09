import { Service } from "typedi";
import { ExpressHelper } from "./ExpressHelper";
import http from "http";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import * as socketio from "socket.io";

@Service()
class SocketIOHelper {
    
    httpServer:http.Server;
    socketIOServer: socketio.Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    
    constructor(expressHelper:ExpressHelper) {
        this.httpServer = http.createServer(expressHelper.express)
        this.socketIOServer = new socketio.Server(this.httpServer)
        this.httpServer.listen(expressHelper.port)
    }

    
}