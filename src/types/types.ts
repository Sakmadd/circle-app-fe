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
  totalFollower: number;
  totalFollowing: number;
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
export interface DetailedFeedType extends FeedType {
  replies: FeedType[];
  likes: LikeType[];
}
export interface LikeType {
  id: number;
  authorId: number;
  targetId: number;
}
export interface FollowType {
  id: number;
  targetId: number;
  ownerId: number;
}

export interface FeedDataType {
  content: string;
  badLabels: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}
export interface EditUserDataType {
  name: string;
  username: string;
  filterContent: boolean;
  bio: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  banner: any;
}
