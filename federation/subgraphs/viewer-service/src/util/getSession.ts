// import ImgurApi from '../dataSources/imgurApi/client';
// import { AccountBase } from '../dataSources/imgurApi/types';
import { IImgurApi, ImgurApi, AccountBase } from "../dataSources/";
// import errorConstants from './errorConstants';
import { ExpressContext } from "apollo-server-express";

export type Session = {
  [x: string]: any;
};

const SESSION_IDENTITY_HEADER_NAME = "x-session-identity";

const getSession = async (context: ExpressContext): Promise<Session> => {
  let username: string = context.req.header("x-username") || '';
  let clientId: string = context.req.header("x-client-id") || '';
  console.log("clientId in session: " + clientId);
  const imgurApi: IImgurApi = new ImgurApi();
  const imgurApiSession = await imgurApi.getSession(username, clientId);

  return {
    id: imgurApiSession.data.id,
  };
};

export default getSession;
