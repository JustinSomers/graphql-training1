import { IImgurApi } from "../dataSources";
import { getSession, errorConstants } from "../util";

import { ExpressContext } from "apollo-server-express";

export type Session = {
  [x: string]: any;
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
  clientId: string;
};

export type Context = CustomContext & DataSourceContext;

export const context = async (
  expressContext: ExpressContext
): Promise<CustomContext> => {
  const { req } = expressContext;
  const accessToken: string | undefined = req.header("Authorization");
  const username: string | undefined = req.header("x-username");
  const clientId: string | undefined = req.header('x-client-id')

  let context = {
    accessToken,
    session: await getSession(expressContext),
    username: username,
    clientId
  };
  return context;
};
