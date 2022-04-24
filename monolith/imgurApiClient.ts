import fetch from 'node-fetch';
import { RESTDataSource } from 'apollo-datasource-rest';

export default class ImgurApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.imgur.com';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    // TODO: clean this up!
    request.headers.set('Authorization', 'Bearer 61aaddc7c1d088697ca4ec195d9738c325e2bb6e');
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

  async getSession() {
    const response = await fetch(
      `${this.baseURL}/3/account/${process.env.USERNAME}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.CLIENT_ID}`,
        },
      },
    );
    const responseJson = await response.json();
    return responseJson.data;
  }
}
