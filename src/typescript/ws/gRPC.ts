import { Server } from "@grpc/grpc-js"
var path = __dirname+'/../../proto/msg_proto.proto'
const server = new Server()
// server.addService()