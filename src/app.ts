import * as http from "node:http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcast-controller"
import { Routes } from "./routes/route"
import { HttpMethods } from "./utils/http-methods"

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const baseURL = req.url?.split("?")[0]

  if (req.method === HttpMethods.GET && baseURL == Routes.LIST) {
    await getListEpisodes(req, res)
  }

  if (req.method === HttpMethods.GET && baseURL == Routes.EPISODES) {
    await getFilterEpisodes(req, res)
  }
}