import Post  from "./Post";

export default interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
  password: string;
  post?: Post | null;
}