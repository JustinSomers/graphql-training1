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
  /** Current and Available avatars associated with this user's account */
  avatars?: Maybe<Avatars>;
  /** A basic description the user has filled out */
  bio?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  cover?: Maybe<Cover>;
  /** The epoch time of account creation */
  created?: Maybe<Scalars['Int']>;
  /** The account id for the username requested */
  id: Scalars['Int'];
  /** The base model for an image */
  image?: Maybe<Image>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  /** False if not a pro user, their expiration date if they are */
  proExpiration?: Maybe<Scalars['Boolean']>;
  /** The reputation for the account, in it's numerical and name format */
  reputation?: Maybe<Reputation>;
  /** The account username, will be the same as requested in the URL */
  url?: Maybe<Scalars['String']>;
  userFollow?: Maybe<UserFollow>;
};


export type AccountImageArgs = {
  id: Scalars['String'];
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

export type Comment = {
  __typename?: 'Comment';
  /** The author of the comment */
  author?: Maybe<Scalars['String']>;
  /** The comment string contents */
  comment?: Maybe<Scalars['String']>;
  /** The id of the comment itself */
  id: Scalars['ID'];
  /** The id of the image associated with the comment */
  image_id?: Maybe<Scalars['String']>;
};

export type Cover = {
  __typename?: 'Cover';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FollowTagInput = {
  tag?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type FollowTagPayload = {
  __typename?: 'FollowTagPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type Image = {
  __typename?: 'Image';
  ad_type?: Maybe<Scalars['Int']>;
  ad_url?: Maybe<Scalars['String']>;
  /** Is the image animated */
  animated?: Maybe<Scalars['Boolean']>;
  /** Bandwidth consumed by the image in bytes */
  bandwidth?: Maybe<Scalars['Float']>;
  /** Epoch time uploaded */
  datetime?: Maybe<Scalars['Int']>;
  /** OPTIONAL, the deletehash, if you're logged in as the image owner */
  deletehash?: Maybe<Scalars['String']>;
  /** Description of the image */
  description?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  /** Indicates if the current user favorited the image. Defaults to false if not signed in. */
  favorite?: Maybe<Scalars['Boolean']>;
  has_sound?: Maybe<Scalars['Boolean']>;
  /** The height of the image in pixels */
  height?: Maybe<Scalars['Int']>;
  /** The id for the image */
  id?: Maybe<Scalars['String']>;
  /** True if the image has been submitted to the gallery, false if otherwise. */
  in_gallery?: Maybe<Scalars['Boolean']>;
  in_most_viral?: Maybe<Scalars['Boolean']>;
  is_ad?: Maybe<Scalars['Boolean']>;
  /** The direct link to the the image. (Note: if fetching an animated GIF that was over 20MB in original size, a .gif thumbnail will be returned) */
  link?: Maybe<Scalars['String']>;
  /** OPTIONAL, the original filename, if you're logged in as the image owner */
  name?: Maybe<Scalars['String']>;
  /** Indicates if the image has been marked as nsfw or not. Defaults to null if information is not available. */
  nsfw?: Maybe<Scalars['Boolean']>;
  /** If the image has been categorized by our backend then this will contain the section the image belongs in. (funny, cats, adviceanimals, wtf, etc) */
  section?: Maybe<Scalars['String']>;
  /** The size of the image in bytes */
  size?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the image */
  title?: Maybe<Scalars['String']>;
  /** Image MIME type */
  type?: Maybe<Scalars['String']>;
  /** The number of image views */
  views?: Maybe<Scalars['Int']>;
  /** The current user's vote on the album. null if not signed in, if the user hasn't voted on it, or if not submitted to the gallery. */
  vote?: Maybe<Scalars['String']>;
  /** The width of the image in pixels */
  width?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Follows the tag specified for the currently logged in user. */
  followTag?: Maybe<FollowTagPayload>;
};


export type MutationFollowTagArgs = {
  input: FollowTagInput;
};

/** GraphQL core operations */
export type Query = {
  __typename?: 'Query';
  /** General account lookup via currently authed user's accessToken */
  account?: Maybe<Account>;
  /** The authenticated viewing user */
  viewer: User;
};


/** GraphQL core operations */
export type QueryAccountArgs = {
  username: Scalars['String'];
};

export type Reputation = {
  __typename?: 'Reputation';
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};

/** Information about the authenticated user (viewer) */
export type User = {
  __typename?: 'User';
  /** Account for viewer, the currently authed User */
  account?: Maybe<Account>;
  id: Scalars['Int'];
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
  Comment: ResolverTypeWrapper<Comment>;
  Cover: ResolverTypeWrapper<Cover>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FollowTagInput: FollowTagInput;
  FollowTagPayload: ResolverTypeWrapper<FollowTagPayload>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
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
  Comment: Comment;
  Cover: Cover;
  Float: Scalars['Float'];
  FollowTagInput: FollowTagInput;
  FollowTagPayload: FollowTagPayload;
  ID: Scalars['ID'];
  Image: Image;
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
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['Cover']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<AccountImageArgs, 'id'>>;
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

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cover'] = ResolversParentTypes['Cover']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowTagPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowTagPayload'] = ResolversParentTypes['FollowTagPayload']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  ad_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ad_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bandwidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  datetime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletehash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_sound?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  in_gallery?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  in_most_viral?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_ad?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nsfw?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  followTag?: Resolver<Maybe<ResolversTypes['FollowTagPayload']>, ParentType, ContextType, RequireFields<MutationFollowTagArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'username'>>;
  viewer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type ReputationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reputation'] = ResolversParentTypes['Reputation']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
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
  Comment?: CommentResolvers<ContextType>;
  Cover?: CoverResolvers<ContextType>;
  FollowTagPayload?: FollowTagPayloadResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reputation?: ReputationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserFollow?: UserFollowResolvers<ContextType>;
};

