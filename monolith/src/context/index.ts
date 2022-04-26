import { ExpressContext } from 'apollo-server-express';
import getSession from '@monolith/context/session';
import IImgurApi from '@monolith/dataSources/imgurApi/client.interface';
import errorConstants from '@monolith/util/errorConstants';

export type Session = {
  id: number;
};

type DataSourceContext = {
  dataSources: {
    imgurApi: IImgurApi;
  };
};

export type CustomContext = {
  accessToken: string;
  session: Session;
  username: string;
};

export type Context = CustomContext & DataSourceContext;

export const context = async ({ req }: ExpressContext): Promise<CustomContext> => {
  const accessToken: string | undefined = req.header('Authorization');
  if (!accessToken) throw new Error(errorConstants.NO_AUTH_HEADER);
  if (!process.env.USERNAME) throw new Error(errorConstants.NO_USERNAME_ENV_VAR);

  return {
    accessToken,
    session: await getSession(),
    username: process.env.USERNAME,
  };
};
