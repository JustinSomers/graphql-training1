import { merge } from 'lodash';
import accountResolver from '@monolith/resolver/account.resolver';
import avatarResolver from '@monolith/resolver/avatar.resolver';
import viewerResolver from '@monolith/resolver/viewer.resolver';

export default merge(accountResolver, avatarResolver, viewerResolver);
