// import ImgurApi from '../dataSources/imgurApi/client';
// import { AccountBase } from '../dataSources/imgurApi/types';
// import IImgurApi from '../dataSources/imgurApi/client.interface';
// import errorConstants from './errorConstants';
import { ExpressContext } from 'apollo-server-express';



export type Session = {
    [x: string]: any
  };

  const SESSION_IDENTITY_HEADER_NAME = 'x-session-identity';

const getSession = async ({req}: ExpressContext): Promise<Session> => {
    let sessionIdentityHeader = req.header(SESSION_IDENTITY_HEADER_NAME) || '';
    let identitiy = JSON.parse(Buffer.from(sessionIdentityHeader, 'base64').toString());

    if(!identitiy) {
        return {};
    } else {
        return identitiy;
    }
};

export default getSession;
