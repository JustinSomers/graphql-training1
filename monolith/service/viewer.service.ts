import { Context } from '@monolith/context';

const viewer = (
  context: Context,
) => ({
  id: context.session.id,
  username: process.env.USERNAME,
});

export default viewer;
