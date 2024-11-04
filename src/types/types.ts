export interface UserType {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar: string;
  banner: string;
  bio: string | null;
  followers: FollowType[];
  followings: FollowType[];
  totalFollowers: number;
  totalFollowings: number;
  isFollowed: boolean;
  feeds: FeedType[];
  filterContent: boolean;
}

export interface FeedType {
  id: number;
  content: string;
  image: string | null;
  createdAt: string;
  authorId: string;
  totalReplies: number;
  totalLikes: number;
  isLiked: boolean;
  badLabels: string[];
  author: UserType | undefined;
}

export interface ReplyType {
  id: number;
  image: string | null;
  content: string;
  userId: string;
  feedId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReplyDataType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  content: string;
  id: number;
}

export interface DetailedFeedType extends FeedType {
  replies: ReplyType[];
  likes: LikeType[];
}
export interface LikeType {
  id: number;
  authorId: string;
  targetId: string;
}
export interface FollowType {
  id: number;
  followerId: string;
  followingId: string;
}

export interface FeedDataType {
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export interface EditUserProfileType {
  name: string;
  username: string;
  bio: string;
}

export interface EditUserImageType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  banner: any;
}

export interface EditUserDataType {
  id: string;
  name: string;
  username: string;
  bio: string;
  filterContent: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  banner: any;
}

export interface ProviderUserData {
  id: string;
  email: string | undefined;
  name: string;
  username: string;
}
