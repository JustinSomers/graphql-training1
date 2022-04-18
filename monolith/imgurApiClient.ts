import { RESTDataSource } from 'apollo-datasource-rest';

export default class ImgurApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.imgur.com';
  }

  static willSendRequest(request) {
    request.headers.set('Authorization', `Client-ID ${process.env.CLIENT_ID}`);
  }

  async getAccountBase(username: string) {
    if (!username) {
      throw new Error('No username');
    }

    const result = await this.get(`/3/account/${username}`);
    return result;
  }
}
