import { RequestOptions } from 'apollo-datasource-rest';
import { AccountBase, AvailableAvatars, FollowTag } from '@monolith/dataSources/imgurApi/types';

interface IImgurApi {
  willSendRequest(request: RequestOptions): void;
  getAccountBase(username: string): Promise<AccountBase>;
  getAvailableAvatars(username: string): Promise<AvailableAvatars>;
  followTag(tag: string): Promise<FollowTag>
  getSession(): Promise<AccountBase>;
}

export default IImgurApi;
