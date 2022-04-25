const viewer = (
  context,
) => ({
  id: context.session.id,
  username: process.env.USERNAME,
});

export default viewer;
