import { merge } from 'lodash';
import accountResolver from '@monolith/resolver/account.resolver';
import avatarResolver from '@monolith/resolver/avatar.resolver';
import commentResolver from '@monolith/resolver/comment.resolver';
import viewerResolver from '@monolith/resolver/viewer.resolver';
import tagResolver from '@monolith/resolver/tag.resolver';
import imageResolver from '@monolith/resolver/image.resolver';

// eslint-disable-next-line max-len
export default merge(accountResolver, avatarResolver, commentResolver, tagResolver, imageResolver, viewerResolver);
