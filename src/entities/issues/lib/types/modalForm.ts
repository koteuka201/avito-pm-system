import { Priority, TaskStatusEnum } from "@shared/api"

export type TaskModalForm={
  assigneeId: string
  status?: TaskStatusEnum
  boardId?: string
  description: string
  title: string
  priority: Priority
}