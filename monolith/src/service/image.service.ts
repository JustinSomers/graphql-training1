import { Image, AccountImageArgs } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';

const getImage = async (
  args: AccountImageArgs,
  context: Context,
): Promise<Image> => {
  const { username } = context;
  const image: Image = await context.dataSources.imgurApi.getImage(username, args.id);
  return image;
};

export default getImage;
