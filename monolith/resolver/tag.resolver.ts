import { Resolvers, MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';
import followTag from '@monolith/service/tag.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Mutation: {
    followTag: async (
      _,
      args: MutationFollowTagArgs,
      context: Context,
    ): Promise<FollowTagPayload> => followTag(args, context),
  },
};

export default resolver;
