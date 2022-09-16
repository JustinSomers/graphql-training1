import { Resolvers, ExampleService } from '../typings/graphqlTypes';
import { Context } from '../context';

const resolver: Resolvers = {
  Query: {
    exampleService: (_, __, context: Context): any => {
      return {
        exampleValue: 'foobar'
      }
    },
  },
  ExampleService: {
    myFirstShareableType: (_, __, context: Context): any => {
      return {
        favoriteRestaurant: 'Olive Garden',
        favoriteSandwhich: {
          protein: 'ham',
          topping: 'lettuce',
          sauce: 'mustard'
        }
      }
    },
    myFirstExternalType: (_, __, context: Context): any => {
      return {
        favoriteRestaurant: 'Olive Garden',
        favoriteSandwhich: {
          protein: 'ham',
          topping: 'lettuce',
          sauce: 'mustard'
        }
      }
    },

  }
};

export default resolver;
