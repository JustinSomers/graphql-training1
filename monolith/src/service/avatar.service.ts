import { Avatar, Avatars } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import { AccountBase, AvailableAvatars } from '@monolith/dataSources/imgurApi/types';

const getAvailableAvatars = async (
  parent: Avatars,
  context: Context,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
): Promise<Avatar[]> => {
  console.log(parent);
  const result: AvailableAvatars = await context.dataSources.imgurApi.getAvailableAvatars(
    'hikesdogsbeers',
  );
  const avatars: Avatar[] = result.data.available_avatars.map((avatar) => ({
    url: avatar.location,
    name: avatar.name,
  }));
  return avatars;
};

const getCurrentAvatar = async (
  parent: Avatars,
  context: Context,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
): Promise<Avatar> => {
  console.log(parent);
  if (!parent.current) {
    const result: AccountBase = await context.dataSources.imgurApi.getAccountBase(
      'hikesdogsbeers',
    );
    return {
      name: result.data.avatar_name,
      url: result.data.avatar,
    };
  }
  return parent.current;
};

export {
  getAvailableAvatars,
  getCurrentAvatar,
};
