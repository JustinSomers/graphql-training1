// eslint-disable-next-line import/prefer-default-export
export const viewer = (
  context,
) => ({
  id: context.session.id,
  username: process.env.USERNAME,
});
