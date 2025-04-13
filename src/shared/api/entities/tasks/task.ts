import { AssignedUser } from "./assignedUser"
import { Priority } from "./priorityEnum"
import { TaskStatusEnum } from "./taskStatusEnum"

export type Task={
  assignee: AssignedUser
  boardId: number
  boardName: string
  description: string
  title: string
  id: number
  status: TaskStatusEnum
  priority: Priority
}