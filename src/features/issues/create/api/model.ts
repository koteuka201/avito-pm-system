import { Priority } from "@shared/api"

export type CreateTaskBody={
  assigneeId: number
  boardId: number
  description: string
  title: string
  priority: Priority
}