import { AssignedUser } from "./assignedUser";
import { Task } from "./task";

export type TaskShortInfo={
  assignee: Omit<AssignedUser, 'description'>
} & Omit<Task, 'boardId' | 'boardName'>