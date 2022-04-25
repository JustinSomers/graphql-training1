import { MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';

const followTag = async (args: MutationFollowTagArgs, context): Promise<FollowTagPayload> => {
  const result = await context.dataSources.imgurApi.followTag(args.input.tag);
  return {
    success: result.success,
  };
};

export default followTag;
