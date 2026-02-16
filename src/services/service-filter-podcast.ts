import { PodcastDTO } from "../models/podcast-dto"
import { podcastRepo } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastDTO> => {
  const queryString = podcastName?.split("?p=")[1] || ""
  const podcasts = await podcastRepo(queryString)
  const responseFormat: PodcastDTO = {
    StatusCode: podcasts.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: podcasts
  }
  return responseFormat
}