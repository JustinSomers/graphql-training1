// usually this would be a call to fetch or decode session data
const getSession = () => ({
  username: process.env.USERNAME,
});

export default getSession();
