const employee = async (
  args,
  dataSources,
) => {
  const result = await dataSources.imgurApi.getAccountBase(args.username);
  return result.data;
};

export default employee;
