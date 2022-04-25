import { MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';

const followTag = async (
  args: MutationFollowTagArgs,
  context: Context,
): Promise<FollowTagPayload> => {
  const result = await context.dataSources.imgurApi.followTag(args.input.tag);
  return {
    success: result.success,
  };
};

export default followTag;
