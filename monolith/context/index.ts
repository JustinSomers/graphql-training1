import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import ImgurApi from '@monolith/imgurApiClient';

const context = async (expressContext: ExpressContext) => {
  const imgurApi = new ImgurApi();
  const accountBase = await imgurApi.getAccountBase(process.env.USERNAME);
  return accountBase;
};

export default context;
