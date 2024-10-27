export interface UserType {
  id: number;
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
  authorId: number;
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
  userId: number;
  feedId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReplyDataType {
  image: string | null;
  content: string;
  id: number;
}

export interface DetailedFeedType extends FeedType {
  replies: ReplyType[];
  likes: LikeType[];
}
export interface LikeType {
  id: number;
  authorId: number;
  targetId: number;
}
export interface FollowType {
  id: number;
  followerId: number;
  followingId: number;
}

export interface FeedDataType {
  content: string;
  badLabels: string[];
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
  id: number;
  name: string;
  username: string;
  bio: string;
  filterContent: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  banner: any;
}
