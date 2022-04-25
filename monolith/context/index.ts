import getSession from '@monolith/context/session';

const context = async ({ req }) => ({
  accessToken: req.header('Authorization'),
  session: await getSession(),
});

export default context;
