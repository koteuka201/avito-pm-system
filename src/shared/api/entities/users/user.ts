import { AssignedUser } from "../tasks";

export type User={
  tasksCount: number
  teamId: number
  teamName: string
} & AssignedUser