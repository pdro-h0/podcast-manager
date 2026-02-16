import fs from "node:fs"
import path from "node:path"
import { IPodcast } from "../models/podcast"

const pathData = path.join(__dirname, "./podcasts.json")
export const podcastRepo = async (podcastName?: string): Promise<IPodcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf8")
  const jsonFile = JSON.parse(rawData)
  if (podcastName) {
    return jsonFile.filter((podcast: IPodcast) => podcast.podcastName.includes(podcastName))
  }
  return jsonFile
}