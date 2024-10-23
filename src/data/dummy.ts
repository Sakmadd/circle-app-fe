export const dummyUser = {
  id: 1,
  username: 'john_doe',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar:
    'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg',
  banner:
    'https://as1.ftcdn.net/v2/jpg/05/07/84/10/1000_F_507841060_QcTDBg7u2hu36Nv4zyxjcvKe0rUTm6jq.jpg',
  bio: 'I am a web developer who loves React and TypeScript.',
  followers: [
    {
      id: 1,
      targetId: 1,
      ownerId: 2,
    },
    {
      id: 2,
      targetId: 1,
      ownerId: 3,
    },
  ],
  followings: [
    {
      id: 3,
      targetId: 4,
      ownerId: 1,
    },
  ],
  totalFollowers: 2,
  totalFollowings: 1,
  isFollowed: true,
  feeds: [
    {
      id: 101,
      content: 'Just finished building a new React project!',
      image: null,
      createdAt: '2024-10-15T10:30:00Z',
      authorId: 1,
      totalReplies: 5,
      totalLikes: 120,
      isLiked: true,
      badLabels: ['spam', 'offensive'],
      author: undefined,
    },
    {
      id: 102,
      content: 'Exploring TypeScript and loving it.',
      image: 'https://example.com/typescript_post.jpg',
      createdAt: '2024-10-14T08:20:00Z',
      authorId: 1,
      totalReplies: 3,
      totalLikes: 95,
      isLiked: false,
      badLabels: [],
      author: undefined,
    },
  ],
  filterContent: true,
};
export const dummyAccounts = [
  {
    id: 1,
    username: 'johndoe',
    name: 'John Doe',
    bio: 'Web developer and coffee enthusiast.',
    avatar: 'https://example.com/avatar1.jpg',
    isFollowed: false,
  },
  {
    id: 2,
    username: 'janedoe',
    name: 'Jane Doe',
    bio: 'UI/UX designer. Love minimalism.',
    avatar: 'https://example.com/avatar2.jpg',
    isFollowed: true,
  },
  {
    id: 3,
    username: 'michael_smith',
    name: 'Michael Smith',
    bio: 'Full-stack developer with a passion for open-source.',
    avatar: 'https://example.com/avatar3.jpg',
    isFollowed: false,
  },
  {
    id: 4,
    username: 'emilyclark',
    name: 'Emily Clark',
    bio: 'Photographer and world traveler.',
    avatar: 'https://example.com/avatar4.jpg',
    isFollowed: true,
  },
  {
    id: 5,
    username: 'danbrown',
    name: 'Dan Brown',
    bio: 'Blockchain enthusiast and tech speaker.',
    avatar: 'https://example.com/avatar5.jpg',
    isFollowed: false,
  },
];
export const dummyDetailFeed = {
  id: 1,
  content: 'This is the first post content',
  image: null,
  createdAt: '2024-10-15T08:00:00Z',
  authorId: 1,
  totalReplies: 2,
  totalLikes: 10,
  isLiked: true,
  badLabels: ['spam', 'offensive'],
  author: {
    id: 1,
    username: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar1.jpg',
    banner: 'https://example.com/banner1.jpg',
    bio: 'Software engineer and tech enthusiast',
    followers: [],
    followings: [],
    totalFollowers: 0,
    totalFollowings: 0,
    isFollowed: false,
    posts: [],
    feeds: [],
    filterContent: true,
  },
  replies: [
    {
      id: 101,
      content: 'Just finished building a new React project!',
      image: null,
      createdAt: '2024-10-15T10:30:00Z',
      authorId: 1,
      totalReplies: 5,
      totalLikes: 120,
      isLiked: true,
      badLabels: ['spam', 'offensive'],
      author: {
        id: 1,
        username: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar1.jpg',
        banner: 'https://example.com/banner1.jpg',
        bio: 'Software engineer and tech enthusiast',
        followers: [],
        followings: [],
        totalFollowers: 0,
        totalFollowings: 0,
        isFollowed: false,
        posts: [],
        feeds: [],
        filterContent: true,
      },
    },
    {
      id: 101,
      content: 'Just finished building a new React project!',
      image: null,
      createdAt: '2024-10-15T10:30:00Z',
      authorId: 1,
      totalReplies: 5,
      totalLikes: 120,
      isLiked: true,
      badLabels: ['spam', 'offensive'],
      author: {
        id: 1,
        username: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar1.jpg',
        banner: 'https://example.com/banner1.jpg',
        bio: 'Software engineer and tech enthusiast',
        followers: [],
        followings: [],
        totalFollowers: 0,
        totalFollowings: 0,
        isFollowed: false,
        posts: [],
        feeds: [],
        filterContent: true,
      },
    },
    {
      id: 101,
      content: 'Just finished building a new React project!',
      image: null,
      createdAt: '2024-10-15T10:30:00Z',
      authorId: 1,
      totalReplies: 5,
      totalLikes: 120,
      isLiked: true,
      badLabels: ['spam', 'offensive'],
      author: {
        id: 1,
        username: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar1.jpg',
        banner: 'https://example.com/banner1.jpg',
        bio: 'Software engineer and tech enthusiast',
        followers: [],
        followings: [],
        totalFollowers: 0,
        totalFollowings: 0,
        isFollowed: false,
        posts: [],
        feeds: [],
        filterContent: true,
      },
    },
    {
      id: 102,
      content: 'Exploring TypeScript and loving it.',
      image: 'https://example.com/typescript_post.jpg',
      createdAt: '2024-10-14T08:20:00Z',
      authorId: 1,
      totalReplies: 3,
      totalLikes: 95,
      isLiked: false,
      badLabels: [],
      author: {
        id: 1,
        username: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar1.jpg',
        banner: 'https://example.com/banner1.jpg',
        bio: 'Software engineer and tech enthusiast',
        followers: [],
        followings: [],
        totalFollowers: 0,
        totalFollowings: 0,
        isFollowed: false,
        posts: [],
        feeds: [],
        filterContent: true,
      },
    },
  ],
  likes: [],
};
export const dummyFeeds = [
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed justo semper, fauci bus quam in, condimentum lectus. Phasellus eu ex arcu.',
    image: null,
    createdAt: '2023-07-31T12:34:56Z',
    authorId: 101,
    totalReplies: 5,
    totalLikes: 10,
    isLiked: true,
    badLabels: [],
    author: {
      id: 101,
      username: '@gabriella',
      name: 'Gabriella V',
      email: 'gabriella@example.com',
      avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Callie',
      banner: 'https://example.com/banner.jpg',
      bio: 'Just living the life',
      followers: [],
      followings: [],
      totalFollowers: 100,
      totalFollowings: 50,
      isFollowed: true,
      feeds: [],
      filterContent: false,
    },
  },
  {
    id: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed justo semper, fauci bus quam in, condimentum lectus. Phasellus eu ex arcu.',
    image: 'https://picsum.photos/1600/900',
    createdAt: '2023-07-31T13:45:21Z',
    authorId: 102,
    totalReplies: 3,
    totalLikes: 15,
    isLiked: false,
    badLabels: [],
    author: {
      id: 102,
      username: '@arrdix',
      name: 'Yudistira Ardi',
      email: 'yudistira@example.com',
      avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Bear',
      banner: 'https://example.com/banner2.jpg',
      bio: 'Web Developer and Coffee Enthusiast',
      followers: [],
      followings: [],
      totalFollowers: 250,
      totalFollowings: 75,
      isFollowed: false,
      feeds: [],
      filterContent: true,
    },
  },
];
export const dummyUsers = [
  {
    id: 1,
    username: 'john_doe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar1.jpg',
    banner: 'https://example.com/banner1.jpg',
    bio: 'Frontend developer passionate about React and TypeScript.',
    followers: [
      { id: 1, targetId: 1, ownerId: 2 },
      { id: 2, targetId: 1, ownerId: 3 },
    ],
    followings: [{ id: 3, targetId: 2, ownerId: 1 }],
    totalFollowers: 2,
    totalFollowings: 1,
    isFollowed: true,
    feeds: [
      {
        id: 101,
        content: 'Just finished building a new React project!',
        image: null,
        createdAt: '2024-10-15T10:30:00Z',
        authorId: 1,
        totalReplies: 5,
        totalLikes: 120,
        isLiked: true,
        badLabels: [],
        author: undefined,
      },
      {
        id: 102,
        content: 'Exploring TypeScript and loving it.',
        image: 'https://example.com/post_image1.jpg',
        createdAt: '2024-10-14T08:20:00Z',
        authorId: 1,
        totalReplies: 3,
        totalLikes: 95,
        isLiked: false,
        badLabels: [],
        author: undefined,
      },
    ],
    filterContent: false,
  },
  {
    id: 2,
    username: 'jane_smith',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://example.com/avatar2.jpg',
    banner: 'https://example.com/banner2.jpg',
    bio: 'Full-stack developer and open-source enthusiast.',
    followers: [
      { id: 3, targetId: 2, ownerId: 1 },
      { id: 4, targetId: 2, ownerId: 3 },
    ],
    followings: [{ id: 5, targetId: 4, ownerId: 2 }],
    totalFollowers: 2,
    totalFollowings: 1,
    isFollowed: true,
    feeds: [
      {
        id: 201,
        content: 'Just published a new open-source project on GitHub!',
        image: 'https://example.com/post_image2.jpg',
        createdAt: '2024-10-10T09:15:00Z',
        authorId: 2,
        totalReplies: 10,
        totalLikes: 200,
        isLiked: true,
        badLabels: [],
        author: undefined,
      },
      {
        id: 202,
        content: 'Attended an amazing tech conference today.',
        image: 'https://example.com/post_image3.jpg',
        createdAt: '2024-10-12T12:45:00Z',
        authorId: 2,
        totalReplies: 8,
        totalLikes: 180,
        isLiked: false,
        badLabels: [],
        author: undefined,
      },
    ],
    filterContent: false,
  },
  {
    id: 3,
    username: 'michael_brown',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    avatar: 'https://example.com/avatar3.jpg',
    banner: 'https://example.com/banner3.jpg',
    bio: 'Backend developer who loves Node.js and databases.',
    followers: [
      { id: 5, targetId: 3, ownerId: 1 },
      { id: 6, targetId: 3, ownerId: 2 },
    ],
    followings: [{ id: 7, targetId: 5, ownerId: 3 }],
    totalFollowers: 2,
    totalFollowings: 1,
    isFollowed: true,
    feeds: [
      {
        id: 301,
        content: 'Setting up a scalable API with Node.js.',
        image: 'https://example.com/post_image4.jpg',
        createdAt: '2024-10-11T11:20:00Z',
        authorId: 3,
        totalReplies: 7,
        totalLikes: 150,
        isLiked: true,
        badLabels: [],
        author: undefined,
      },
      {
        id: 302,
        content: 'Best practices for database optimization.',
        image: null,
        createdAt: '2024-10-12T14:10:00Z',
        authorId: 3,
        totalReplies: 5,
        totalLikes: 120,
        isLiked: false,
        badLabels: [],
        author: undefined,
      },
    ],
    filterContent: false,
  },
  {
    id: 4,
    username: 'emma_jones',
    name: 'Emma Jones',
    email: 'emma.jones@example.com',
    avatar: 'https://example.com/avatar4.jpg',
    banner: 'https://example.com/banner4.jpg',
    bio: 'Designer with a passion for user experience and UI design.',
    followers: [
      { id: 8, targetId: 4, ownerId: 2 },
      { id: 9, targetId: 4, ownerId: 3 },
    ],
    followings: [{ id: 10, targetId: 6, ownerId: 4 }],
    totalFollowers: 2,
    totalFollowings: 1,
    isFollowed: false,
    feeds: [
      {
        id: 401,
        content: 'Creating a seamless user experience with Figma.',
        image: 'https://example.com/post_image5.jpg',
        createdAt: '2024-10-13T09:00:00Z',
        authorId: 4,
        totalReplies: 6,
        totalLikes: 160,
        isLiked: true,
        badLabels: [],
        author: undefined,
      },
      {
        id: 402,
        content: 'Best color palettes for modern UI design.',
        image: 'https://example.com/post_image6.jpg',
        createdAt: '2024-10-14T10:30:00Z',
        authorId: 4,
        totalReplies: 9,
        totalLikes: 180,
        isLiked: false,
        badLabels: [],
        author: undefined,
      },
    ],
    filterContent: false,
  },
  {
    id: 5,
    username: 'david_lee',
    name: 'David Lee',
    email: 'david.lee@example.com',
    avatar: 'https://example.com/avatar5.jpg',
    banner: 'https://example.com/banner5.jpg',
    bio: 'DevOps engineer who automates infrastructure.',
    followers: [
      { id: 11, targetId: 5, ownerId: 3 },
      { id: 12, targetId: 5, ownerId: 4 },
    ],
    followings: [{ id: 13, targetId: 7, ownerId: 5 }],
    totalFollowers: 2,
    totalFollowings: 1,
    isFollowed: false,
    feeds: [
      {
        id: 501,
        content: 'Automating server setup with Ansible.',
        image: 'https://example.com/post_image7.jpg',
        createdAt: '2024-10-13T14:50:00Z',
        authorId: 5,
        totalReplies: 4,
        totalLikes: 110,
        isLiked: true,
        badLabels: [],
        author: undefined,
      },
      {
        id: 502,
        content: 'Using Docker for containerized applications.',
        image: null,
        createdAt: '2024-10-14T16:00:00Z',
        authorId: 5,
        totalReplies: 3,
        totalLikes: 90,
        isLiked: false,
        badLabels: [],
        author: undefined,
      },
    ],
    filterContent: false,
  },
];
