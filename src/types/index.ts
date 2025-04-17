export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  location: string;
  company: string;
  website: string;
}

export interface Todo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}