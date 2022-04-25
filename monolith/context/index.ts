import getSession from '@monolith/context/session';
import IImgurApi from '@monolith/dataSources/imgurApi/imgurApiClient.interface';
import { ExpressContext } from 'apollo-server-express';

export type Session = {
  id: number;
  username: string;
};

type DataSourceContext = {
  dataSources: {
    imgurApi: IImgurApi;
  };
};

export type CustomContext = {
  accessToken: string;
  session: Session;
};

export type Context = CustomContext & DataSourceContext;

export const context = async ({ req }: ExpressContext): Promise<CustomContext> => ({
  accessToken: req.header('Authorization'),
  session: await getSession(),
});
