import { MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import { FollowTag } from '@monolith/service/account/types';

const followTag = async (
  args: MutationFollowTagArgs,
  context: Context,
): Promise<FollowTagPayload> => {
  const result: FollowTag = await context.dataSources.imgurApi.followTag(args.input.tag);
  return {
    success: result.success,
  };
};

export default followTag;
