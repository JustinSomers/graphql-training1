import { MutationFollowTagArgs, FollowTagPayload } from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import { FollowTag } from '@monolith/dataSources/imgurApi/types';

const followTag = async (
  args: MutationFollowTagArgs,
  context: Context,
): Promise<FollowTagPayload> => {
  if (!args.input.tag) throw new Error('no tag');
  const result: FollowTag = await context.dataSources.imgurApi.followTag(
    context.username,
    args.input.tag,
  );
  return {
    success: result.success,
  };
};

export default followTag;
