import { Avatar } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import { AvailableAvatars } from '@monolith/dataSources/imgurApi/types';

const getAvailableAvatars = async (
  username: string,
  context: Context,
): Promise<Avatar[]> => {
  const result: AvailableAvatars = await context.dataSources.imgurApi.getAvailableAvatars(username);
  const avatars: Avatar[] = result.data.available_avatars.map((avatar) => ({
    url: avatar.location,
    name: avatar.name,
  }));
  return avatars;
};

export default getAvailableAvatars;
