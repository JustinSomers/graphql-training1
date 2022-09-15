import { Avatar } from '../typings/graphqlTypes';
import { Context } from '../context';
import { AvailableAvatars } from '../dataSources';

const getAvailableAvatars = async (
  username: string,
  context: Context,
): Promise<Avatar[]> => {
  console.log('username queried: ' + username);
  const result: AvailableAvatars = await context.dataSources.imgurApi.getAvailableAvatars(
    username,
  );
  const availableAvatars: Avatar[] = result.data.available_avatars.map((avatar) => ({
    url: avatar.location,
    name: avatar.name,
  }));
  console.log('logged result below');
  console.log(result);
  return availableAvatars;
};

export default getAvailableAvatars;
