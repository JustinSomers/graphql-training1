import { Resolvers, MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';
import followTag from '@monolith/service/tag.service';

const resolver: Resolvers = {
  Mutation: {
    followTag: async (
      _,
      args: MutationFollowTagArgs,
      context,
    ): Promise<FollowTagPayload> => followTag(args, context),
  },
};

export default resolver;
