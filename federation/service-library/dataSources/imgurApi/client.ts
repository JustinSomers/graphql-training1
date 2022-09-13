import fetch, { Response } from 'node-fetch';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import {
  AccountBase, AvailableAvatars, FollowTag, ImagesResponse, Image, ImgurCommentResponse,
} from './types';
import IImgurApi from './client.interface';
import errorConstants from '../../util/errorConstants';

export default class ImgurApi extends RESTDataSource implements IImgurApi {
  constructor() {
    super();
    this.baseURL = 'https://api.imgur.com';
  }

  override willSendRequest(request: RequestOptions): void {
    request.headers.set('Authorization', this.context.accessToken);
  }

  async getAccountBase(username: string): Promise<AccountBase> {
    if (!username) {
      throw new Error(errorConstants.NO_USERNAME);
    }

    const result: AccountBase = await this.get(`/3/account/${username}`);
    result.data.username = username;
    return result;
  }

  async getAvailableAvatars(username: string): Promise<AvailableAvatars> {
    if (!username) {
      throw new Error(errorConstants.NO_USERNAME);
    }

    const result: AvailableAvatars = await this.get(`/3/account/${username}/available_avatars`);
    return result;
  }

  async followTag(username: string, tag: string): Promise<FollowTag> {
    if (!tag) {
      throw new Error(errorConstants.NO_TAG_INPUT);
    }

    const result: FollowTag = await this.post(`/3/account/${username}/follow/tag/${tag}`);
    return result;
  }

  async getImage(username: string, imageId: string): Promise<Image> {
    if (!username) {
      throw new Error(errorConstants.NO_USERNAME);
    }

    const result: ImagesResponse = await this.get(`/3/account/${username}/image/${imageId}`); // N9gEpVG
    return result.data;
  }

  async getComments(username: string): Promise<Comment[]> {
    const result: ImgurCommentResponse = await this.get(`/3/account/${username}/comments/`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return result.data;
  }

  async getSession(): Promise<AccountBase> {
    const response: Response = await fetch(
      `${this.baseURL}/3/account/${process.env.USERNAME}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.CLIENT_ID}`,
        },
      },
    );
    let responseJson: AccountBase = await response.json() as AccountBase;
    return responseJson;
  }
}
