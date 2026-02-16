import * as http from "node:http"
import { app } from "./app"

const PORT = Number(process.env.PORT) || 8000
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})