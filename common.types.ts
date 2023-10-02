import { User, Session } from 'next-auth'

export type FormState = {
    title: string;
    description: string;
    image: string;
    image1:string;
    image2:string;
    image3:string;
    category: string;
};

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    image1:string;
    image2:string;
    image3:string;
    category: string;
    id: string;
}

export interface UserProfile {
    id: string;
    name: string;
    Email: string;
    avatarUrl: string;  
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    Email: string;
    avatarUrl: string;
  };
}

export interface ProjectForm {
  title: string;
  description: string;
  image: string;
  image1:string;
  image2:string;
  image3:string;
  category: string;
}