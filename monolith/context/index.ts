import getSession from '@monolith/context/session';

export type Session = {
  id: number;
  username: string;
};

export type Context = {
  accessToken: string;
  session: Session;
};

export const context = async ({ req }): Promise<Context> => ({
  accessToken: req.header('Authorization'),
  session: await getSession(),
});
