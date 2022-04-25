import httpFetch from '@monolith/dataSources/imgurApiClient.types';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { AccountBase, AvailableAvatars, FollowTag } from '@monolith/service/account/types';
import IImgurApi from '@monolith/dataSources/imgurApiClient.interface';

export default class ImgurApi extends RESTDataSource implements IImgurApi {
  constructor() {
    super();
    this.baseURL = 'https://api.imgur.com';
  }

  willSendRequest(request: RequestOptions): void {
    request.headers.set('Authorization', this.context.accessToken);
  }

  async getAccountBase(username: string): Promise<AccountBase> {
    if (!username) {
      throw new Error('No username');
    }

    const result: AccountBase = await this.get(`/3/account/${username}`);
    return result;
  }

  async getAvailableAvatars(username: string): Promise<AvailableAvatars> {
    if (!username) {
      throw new Error('No username');
    }

    const result: AvailableAvatars = await this.get(`/3/account/${username}/available_avatars`);
    return result;
  }

  async followTag(tag: string): Promise<FollowTag> {
    if (!tag) {
      throw new Error('No tag');
    }

    const result: FollowTag = await this.post(`/3/account/me/follow/tag/${tag}`);
    return result;
  }

  async getSession(): Promise<AccountBase> {
    const response = await httpFetch<AccountBase>(
      `${this.baseURL}/3/account/${process.env.USERNAME}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.CLIENT_ID}`,
        },
      },
    );
    const responseJson: AccountBase = response.parsedBody;
    return responseJson;
  }
}
