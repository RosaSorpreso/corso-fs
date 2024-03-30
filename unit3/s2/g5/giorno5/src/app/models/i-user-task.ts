import { iTodo } from './i-todo';
import { iUser } from './i-user';
export interface iUserTask {
  user: iUser,
  task: iTodo[]
}
