import { repoPodcast } from "../repositories/posdcasts-repository";
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";
import { PodcastModel } from "../models/podcast-model";

export const serviceFilterEpisodes = async (
  podcastName: String | undefined
): Promise<PodcastTransferModel> => {
  //Define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  //Busca os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repoPodcast(queryString);

  //Verifica se tem conteúdo
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;
  return responseFormat;
};
