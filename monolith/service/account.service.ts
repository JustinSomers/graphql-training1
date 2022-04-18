export const account = async (
  args,
  dataSources,
) => {
  const result = await dataSources.imgurApi.getAccountBase(args.username);
  return result.data;
};

export const avatar = async (
  parent,
  args,
  dataSources
) => {
  const avatarSchema = {
    url: parent.avatar,
    avatar_name: parent.avatar_name,
  };
  return avatarSchema;
};
