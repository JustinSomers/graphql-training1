import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  avatars?: Maybe<Avatars>;
  bio?: Maybe<Scalars['String']>;
  cover?: Maybe<Cover>;
  created?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  proExpiration?: Maybe<Scalars['Boolean']>;
  reputation?: Maybe<Reputation>;
  url?: Maybe<Scalars['String']>;
  userFollow?: Maybe<UserFollow>;
};

export type Avatar = {
  __typename?: 'Avatar';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Avatars = {
  __typename?: 'Avatars';
  available?: Maybe<Array<Maybe<Avatar>>>;
  current?: Maybe<Avatar>;
};

export type Cover = {
  __typename?: 'Cover';
  cover?: Maybe<Scalars['String']>;
  coverName?: Maybe<Scalars['String']>;
};

export type FollowTagInput = {
  tag?: InputMaybe<Scalars['String']>;
};

export type FollowTagPayload = {
  __typename?: 'FollowTagPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Update metadata for an Account. */
  followTag?: Maybe<FollowTagPayload>;
};


export type MutationFollowTagArgs = {
  input: FollowTagInput;
};

/** GraphQL core operations */
export type Query = {
  __typename?: 'Query';
  /** The authenticated viewing user */
  viewer: User;
};

export type Reputation = {
  __typename?: 'Reputation';
  reputation?: Maybe<Scalars['Int']>;
  reputationName?: Maybe<Scalars['String']>;
};

/** Information about the authenticated user (viewer) */
export type User = {
  __typename?: 'User';
  /** Retrieve account by username */
  account?: Maybe<Account>;
  id: Scalars['Int'];
  username: Scalars['String'];
};


/** Information about the authenticated user (viewer) */
export type UserAccountArgs = {
  username: Scalars['String'];
};

export type UserFollow = {
  __typename?: 'UserFollow';
  status?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
  Account: ResolverTypeWrapper<Account>;
  Avatar: ResolverTypeWrapper<Avatar>;
  Avatars: ResolverTypeWrapper<Avatars>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cover: ResolverTypeWrapper<Cover>;
  FollowTagInput: FollowTagInput;
  FollowTagPayload: ResolverTypeWrapper<FollowTagPayload>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Reputation: ResolverTypeWrapper<Reputation>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserFollow: ResolverTypeWrapper<UserFollow>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Avatar: Avatar;
  Avatars: Avatars;
  Boolean: Scalars['Boolean'];
  Cover: Cover;
  FollowTagInput: FollowTagInput;
  FollowTagPayload: FollowTagPayload;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Reputation: Reputation;
  String: Scalars['String'];
  User: User;
  UserFollow: UserFollow;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  avatars?: Resolver<Maybe<ResolversTypes['Avatars']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['Cover']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  proExpiration?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reputation?: Resolver<Maybe<ResolversTypes['Reputation']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userFollow?: Resolver<Maybe<ResolversTypes['UserFollow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Avatar'] = ResolversParentTypes['Avatar']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Avatars'] = ResolversParentTypes['Avatars']> = {
  available?: Resolver<Maybe<Array<Maybe<ResolversTypes['Avatar']>>>, ParentType, ContextType>;
  current?: Resolver<Maybe<ResolversTypes['Avatar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cover'] = ResolversParentTypes['Cover']> = {
  cover?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowTagPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowTagPayload'] = ResolversParentTypes['FollowTagPayload']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  followTag?: Resolver<Maybe<ResolversTypes['FollowTagPayload']>, ParentType, ContextType, RequireFields<MutationFollowTagArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  viewer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type ReputationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reputation'] = ResolversParentTypes['Reputation']> = {
  reputation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reputationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<UserAccountArgs, 'username'>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserFollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserFollow'] = ResolversParentTypes['UserFollow']> = {
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Avatar?: AvatarResolvers<ContextType>;
  Avatars?: AvatarsResolvers<ContextType>;
  Cover?: CoverResolvers<ContextType>;
  FollowTagPayload?: FollowTagPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reputation?: ReputationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserFollow?: UserFollowResolvers<ContextType>;
};
