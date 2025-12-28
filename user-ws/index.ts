import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface Room {
    sockets: WebSocket[]
}

const rooms: Record<string, Room> = {};


wss.on("connection", function (ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    console.log("Reviced to", data);
  });

  ws.send("Somthing");
});
