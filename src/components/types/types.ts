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
  vibes: PostType[];
  filterContent: boolean;
}

export interface FollowType {
  id: number;
  targetId: number;
  ownerId: number;
}

export interface PostType {
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
