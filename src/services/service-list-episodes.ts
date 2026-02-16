import { PodcastDTO } from "../models/podcast-dto"
import { podcastRepo } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<PodcastDTO> => {
  const podcasts = await podcastRepo()
  const responseFormat: PodcastDTO = {
    StatusCode: podcasts.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: podcasts
  }
  return responseFormat
}