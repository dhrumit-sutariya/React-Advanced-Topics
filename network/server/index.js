const http = require("http");
const WebSocketServer = require("websocket").server;

const port = 8000;

const server = http.createServer();
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const wsServer = new WebSocketServer({
  httpServer: server,
});

const clients = {};
const getUniqueID = () => {
  const s4 = () =>
    Math.floor(1 + Math.random() * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

wsServer.on("request", (request) => {
  var userID = getUniqueID();
  console.log(
    new Date() +
      " Received a new connection from Origin " +
      request.origin +
      "."
  );

  const connection = request.accept(null, request.origin);
  clients[userID] = connection;

  console.log(
    "Connected " + userID + " in " + Object.getOwnPropertyNames(clients)
  );

  connection.on("message", (message) => {
    if (message.type === "utf8") {
      // console.log("Received Message: ", message.utf8Data);

      for (key in clients) {
        clients[key].sendUTF(message.utf8Data);
        console.log("message sent to : ", clients[key]);
      }
    }
  });
});
