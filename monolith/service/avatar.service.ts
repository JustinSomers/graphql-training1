import { Avatar } from '@monolith/graphqlTypes';

export const currentAvatar = async (parent): Promise<Avatar> => ({
  url: parent.avatar,
  name: parent.avatar_name,
});

export const getAvailableAvatars = async (username, context): Promise<Avatar[]> => {
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
