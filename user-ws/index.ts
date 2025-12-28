import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface Room {
    sockets: WebSocket[]
}

const rooms: Record<string, Room> = {};


wss.on("connection", function (ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    const parsedData = JSON.parse(data);
    if(parsedData.type === "join_room")
    console.log("Reviced to", data);
  });

  ws.send("Somthing");
});
