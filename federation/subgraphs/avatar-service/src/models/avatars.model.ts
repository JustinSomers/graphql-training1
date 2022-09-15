import { AvailableAvatars } from '@monolith/dataSources';
import {
    Avatars, Avatar, Maybe
  } from '../typings/graphqlTypes';
  
  export default class AvatarsModel implements Avatars {
    __typename?: 'Avatars';

    available?: Maybe<Array<Maybe<Avatar>>>;
    
    constructor(properties: Partial<Avatars> = {}) {
        Object.keys(properties).forEach((key) => {
          this[key] = properties[key];
        });
      }
  }
