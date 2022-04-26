import getSession from '@monolith/context/session';
import IImgurApi from '@monolith/dataSources/imgurApi/client.interface';
import { ExpressContext } from 'apollo-server-express';

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
  if (!accessToken) throw new Error('No Authorization header');
  if (!process.env.USERNAME) throw new Error('no process env var username');

  return {
    accessToken,
    session: await getSession(),
    username: process.env.USERNAME,
  };
};
