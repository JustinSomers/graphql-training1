import { RequestOptions } from 'apollo-datasource-rest';
import {
  AccountBase, AvailableAvatars, FollowTag, Image,
} from './types';

interface IImgurApi {
  willSendRequest(request: RequestOptions): void;
  getAccountBase(username: string): Promise<AccountBase>;
  getAvailableAvatars(username: string): Promise<AvailableAvatars>;
  followTag(username:string, tag: string): Promise<FollowTag>
  getImage(username: string, imageId: string): Promise<Image>;
  getComments(username: string): Promise<Comment[]>;
  getSession(username: string, clientId: string): Promise<AccountBase>;
}

export default IImgurApi;
