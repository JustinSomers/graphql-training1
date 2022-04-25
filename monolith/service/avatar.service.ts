import { Avatar } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';

export const currentAvatar = async (parent): Promise<Avatar> => ({
  url: parent.avatar,
  name: parent.avatar_name,
});

export const getAvailableAvatars = async (
  username: string,
  context: Context,
): Promise<Avatar[]> => {
  const result = await context.dataSources.imgurApi.getAvailableAvatars(username);
  const avatars = [];
  result.data.available_avatars.forEach((avatar) => {
    avatars.push({
      url: avatar.location,
      name: avatar.name,
    });
  });
  return avatars;
};
