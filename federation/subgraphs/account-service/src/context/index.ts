import { getSession, IImgurApi, errorConstants } from "service-library";

import { ExpressContext } from "apollo-server-express";

export type Session = {
    [x:string]: any
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

export const context = async (
  expressContext: ExpressContext
): Promise<CustomContext> => {
  const { req } = expressContext;
  const accessToken: string | undefined = req.header("Authorization");
  if (!accessToken) throw new Error(errorConstants.NO_AUTH_HEADER);
  if (!process.env.USERNAME)
    throw new Error(errorConstants.NO_USERNAME_ENV_VAR);
    
    let context = {
        accessToken,
        session: await getSession(expressContext),
        username: process.env.USERNAME,
    }
    console.log(context);
  return context;
};
