import { IncomingMessage, ServerResponse } from "node:http"
import { serviceListEpisodes } from "../services/service-list-episodes"
import { serviceFilterEpisodes } from "../services/service-filter-podcast"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const { StatusCode, body: podcasts } = await serviceListEpisodes()
  res.writeHead(StatusCode, { "Content-Type": "application/json" })
  res.end(JSON.stringify(podcasts))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const { StatusCode, body: podcasts } = await serviceFilterEpisodes(req.url)
  res.writeHead(StatusCode, { "Content-Type": "application/json" })
  res.end(JSON.stringify(podcasts))
}