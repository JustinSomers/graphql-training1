const employee = async (
  args,
  dataSources
) => {
  return {
    id: '1234',
    name: {
      firstName: 'Kyle',
      lastName: 'Banner'
    },
    title: 'CO',
    email: 'kyle.banner@example.com',
    practice: 'TE'
  };
};

export default employee;
