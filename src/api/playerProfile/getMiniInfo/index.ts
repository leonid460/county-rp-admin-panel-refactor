import { get } from 'api/requests';

interface IMiniInfoGetResponse {
  login: string;
}

export async function getMiniInfo(): Promise<IMiniInfoGetResponse> {
  const url = 'PlayerProfile/MiniInfo';

  const result = await get(url);

  return result['login'];
}
