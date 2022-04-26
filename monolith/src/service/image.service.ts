import { Image, AccountImageArgs, Account } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';

const getImage = async (
  parent: Account,
  args: AccountImageArgs,
  context: Context,
): Promise<Image> => {
  const username = args.username || parent.username;
  const result: Image = await context.dataSources.imgurApi.getImage(username, args.id);
  return result;
};

export default getImage;
