import { io } from "socket.io-client";

const URL = "https://dev-praktika.tsvs.kg";

export const socket = io(URL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
});
