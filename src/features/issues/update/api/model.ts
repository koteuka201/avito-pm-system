import { Priority, TaskStatusEnum } from "@shared/api"

export type UpdateTaskArgs={
  taskId: number
}

export type UpdateTaskBody={
  assigneeId: number
  status: TaskStatusEnum
  description: string
  title: string
  priority: Priority
}