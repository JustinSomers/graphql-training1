import getSession from '@monolith/context/session';

const context = async () => ({
  session: await getSession(),
});

export default context;
