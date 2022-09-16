import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  link__Import: any;
};

/** When making a contract with an enum, you need to ensure to tag enums also */
export type Example =
  | 'EXAMPLE_1'
  | 'EXAMPLE_2';

export type ExampleService = {
  __typename?: 'ExampleService';
  exampleValue: Scalars['String'];
  myFirstContract?: Maybe<MyFirstContract>;
  myFirstExternalType?: Maybe<MyFirstExternalType>;
  myFirstShareableType?: Maybe<MyFirstShareableType>;
};

export type MyFirstContract = {
  __typename?: 'MyFirstContract';
  tagOne: Scalars['String'];
  tagThree?: Maybe<NestedContractTwo>;
  tagTwo?: Maybe<NestedContract>;
};

export type MyFirstExternalType = {
  __typename?: 'MyFirstExternalType';
  exampleService?: Maybe<ExampleService>;
  /** Tagging external will let the type show up in the schema - but the actual field is resolved in another subgraph */
  externalServiceName: Scalars['String'];
};

/** Information about the authenticated user (viewer) */
export type MyFirstShareableType = {
  __typename?: 'MyFirstShareableType';
  /** Shareable makes a field resolvable by both fields. */
  favoriteRestaruant: Scalars['String'];
  favoriteSandwhich?: Maybe<Sandwhich>;
};

export type NestedContract = {
  __typename?: 'NestedContract';
  contractName: Scalars['String'];
  serviceName?: Maybe<Example>;
};

/** Tagging at the top will tag all the child properties, but won't tag grand-children properties */
export type NestedContractTwo = {
  __typename?: 'NestedContractTwo';
  contractName: Scalars['String'];
  serviceName?: Maybe<Example>;
};

export type Query = {
  __typename?: 'Query';
  exampleService?: Maybe<ExampleService>;
};

export type Sandwhich = {
  __typename?: 'Sandwhich';
  protein: Scalars['String'];
  sauce: Scalars['String'];
  topping: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Example: Example;
  ExampleService: ResolverTypeWrapper<ExampleService>;
  MyFirstContract: ResolverTypeWrapper<MyFirstContract>;
  MyFirstExternalType: ResolverTypeWrapper<MyFirstExternalType>;
  MyFirstShareableType: ResolverTypeWrapper<MyFirstShareableType>;
  NestedContract: ResolverTypeWrapper<NestedContract>;
  NestedContractTwo: ResolverTypeWrapper<NestedContractTwo>;
  Query: ResolverTypeWrapper<{}>;
  Sandwhich: ResolverTypeWrapper<Sandwhich>;
  String: ResolverTypeWrapper<Scalars['String']>;
  link__Import: ResolverTypeWrapper<Scalars['link__Import']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ExampleService: ExampleService;
  MyFirstContract: MyFirstContract;
  MyFirstExternalType: MyFirstExternalType;
  MyFirstShareableType: MyFirstShareableType;
  NestedContract: NestedContract;
  NestedContractTwo: NestedContractTwo;
  Query: {};
  Sandwhich: Sandwhich;
  String: Scalars['String'];
  link__Import: Scalars['link__Import'];
};

export type LinkDirectiveArgs = {
  import?: Maybe<Array<Maybe<Scalars['link__Import']>>>;
  url: Scalars['String'];
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ShareableDirectiveArgs = { };

export type ShareableDirectiveResolver<Result, Parent, ContextType = any, Args = ShareableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExampleServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExampleService'] = ResolversParentTypes['ExampleService']> = {
  exampleValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  myFirstContract?: Resolver<Maybe<ResolversTypes['MyFirstContract']>, ParentType, ContextType>;
  myFirstExternalType?: Resolver<Maybe<ResolversTypes['MyFirstExternalType']>, ParentType, ContextType>;
  myFirstShareableType?: Resolver<Maybe<ResolversTypes['MyFirstShareableType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyFirstContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyFirstContract'] = ResolversParentTypes['MyFirstContract']> = {
  tagOne?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagThree?: Resolver<Maybe<ResolversTypes['NestedContractTwo']>, ParentType, ContextType>;
  tagTwo?: Resolver<Maybe<ResolversTypes['NestedContract']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyFirstExternalTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyFirstExternalType'] = ResolversParentTypes['MyFirstExternalType']> = {
  exampleService?: Resolver<Maybe<ResolversTypes['ExampleService']>, ParentType, ContextType>;
  externalServiceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyFirstShareableTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyFirstShareableType'] = ResolversParentTypes['MyFirstShareableType']> = {
  favoriteRestaruant?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favoriteSandwhich?: Resolver<Maybe<ResolversTypes['Sandwhich']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NestedContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['NestedContract'] = ResolversParentTypes['NestedContract']> = {
  contractName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['Example']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NestedContractTwoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NestedContractTwo'] = ResolversParentTypes['NestedContractTwo']> = {
  contractName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['Example']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  exampleService?: Resolver<Maybe<ResolversTypes['ExampleService']>, ParentType, ContextType>;
};

export type SandwhichResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sandwhich'] = ResolversParentTypes['Sandwhich']> = {
  protein?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sauce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Link__ImportScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['link__Import'], any> {
  name: 'link__Import';
}

export type Resolvers<ContextType = any> = {
  ExampleService?: ExampleServiceResolvers<ContextType>;
  MyFirstContract?: MyFirstContractResolvers<ContextType>;
  MyFirstExternalType?: MyFirstExternalTypeResolvers<ContextType>;
  MyFirstShareableType?: MyFirstShareableTypeResolvers<ContextType>;
  NestedContract?: NestedContractResolvers<ContextType>;
  NestedContractTwo?: NestedContractTwoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sandwhich?: SandwhichResolvers<ContextType>;
  link__Import?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  link?: LinkDirectiveResolver<any, any, ContextType>;
  shareable?: ShareableDirectiveResolver<any, any, ContextType>;
};
