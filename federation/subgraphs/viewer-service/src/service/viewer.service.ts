import { Context } from '@monolith/context';
import { Identity } from '../typings/graphqlTypes';

const viewer = (
  context: Context,
): Identity => ({
  id: context.session.id,
  username: context.username,
});

export default viewer;
