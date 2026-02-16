import { IPodcast } from "./podcast"

export interface PodcastDTO {
  StatusCode: number
  body: IPodcast[]
}