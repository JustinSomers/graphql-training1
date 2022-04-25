import { merge } from 'lodash';
import accountResolver from '@monolith/resolver/account.resolver';
import viewerResolver from '@monolith/resolver/viewer.resolver';
import tagResolver from '@monolith/resolver/tag.resolver';

export default merge(accountResolver, tagResolver, viewerResolver);
