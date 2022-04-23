// eslint-disable-next-line import/prefer-default-export
export const viewer = (
  context,
) => {
  console.log(context);
  return {
    id: 1234,
    username: context.session.username,
  };
};
