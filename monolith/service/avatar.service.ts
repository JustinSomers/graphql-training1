import { Avatar } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import { AvailableAvatars } from '@monolith/service/account/types';

const getAvailableAvatars = async (
  username: string,
  context: Context,
): Promise<Avatar[]> => {
  const result: AvailableAvatars = await context.dataSources.imgurApi.getAvailableAvatars(username);
  const avatars: Avatar[] = [];
  result.data.available_avatars.forEach((avatar) => {
    avatars.push({
      url: avatar.location,
      name: avatar.name,
    });
  });
  return avatars;
};

export default getAvailableAvatars;
