export type User = {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: number;
  name: string;
};

export type Like = {
  id: number;
  userId: number;
  postId: number;
};

export type Post = {
  id: number;
  title: string;
  slug: string | null;
  content: string;
  thumbnail: string | null;
  published: boolean;
  authorId: number;
  author: User;
  tags?: Tag[];
  createdAt: Date;
  updatedAt: Date;
  _count: {
    likes: number;
    comments: number;
  };
};

export type CommentEntity = {
  id: number;
  content: string;
  postId: number;
  post: Post;
  authorId: number;
  author: User;
  createdAt: Date;
  updatedAt: Date;
};
