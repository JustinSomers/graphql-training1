import getSession from '@monolith/context/session';
import IImgurApi from '@monolith/dataSources/imgurApi/client.interface';
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

export const context = async ({ req }: ExpressContext): Promise<CustomContext> => {
  const accessToken: string | undefined = req.header('Authorization');
  if (!accessToken) throw new Error('no Authorization header');

  return {
    accessToken,
    session: await getSession(),
  };
};
