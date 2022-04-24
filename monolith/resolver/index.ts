import { merge } from 'lodash';
import accountResolver from '@monolith/resolver/account.resolver';
import viewerResolver from '@monolith/resolver/viewer.resolver';

export default merge(accountResolver, viewerResolver);
