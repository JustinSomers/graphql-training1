const employee = async (
  args,
  dataSources,
) => {
  const result = await dataSources.imgurApi.getAccountBase('hikesdogsbeers');
  console.log('service result', result);
  return result;
};

export default employee;
