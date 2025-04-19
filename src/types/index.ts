export interface BaseImageProps {
  src: string;
  alt: string;
  wrapperClass?: string;
  imageClass?: string;
  showFallback?: boolean;
  fallbackSrc?: string;
}

export interface PostViewProps {
  id: number;
  title: string;
  body: string;
  avatar?: string;
}

export interface PostDetailProps {
  id: number;
  title: string;
  body: string;
  avatar: string;
}

export interface AlbumViewProps {
  id: number;
  title: string;
  images: string[];
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  },
  avatar: string;
  location: string;
}

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface AlbumProps {
  userId: number;
  id: number;
  title: string;
  images: string[];
}

export interface StateProps {
  users: UserProps[];
  userTodos:  TodoProps[];
  userPosts:  PostProps[];
  userComments: CommentProps[];
  userAlbums: AlbumProps[];
  error: string | null;
}