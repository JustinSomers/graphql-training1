import fetch from 'node-fetch';
import { RESTDataSource } from 'apollo-datasource-rest';

export default class ImgurApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.imgur.com';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.accessToken);
  }

  async getAccountBase(username: string) {
    if (!username) {
      throw new Error('No username');
    }

    const result = await this.get(`/3/account/${username}`);
    return result;
  }

  async getAvailableAvatars(username: string) {
    if (!username) {
      throw new Error('No username');
    }

    const result = await this.get(`/3/account/${username}/available_avatars`);
    return result;
  }

  async followTag(tag: string) {
    if (!tag) {
      throw new Error('No tag');
    }

    const result = await this.post(`/3/account/me/follow/tag/${tag}`);
    return result;
  }

  async getSession() {
    const response = await fetch(
      `${this.baseURL}/3/account/${process.env.USERNAME}`,
      {
        method: 'GET',
        headers: {
          Authorization: this.context.accessToken,
        },
      },
    );
    const responseJson = await response.json();
    return responseJson.data;
  }
}
