import { TaskStatusEnum } from "@shared/api"

export type TasksFilter = {
  status?: TaskStatusEnum
  board?: string
  title?: string
  assigned?: string
}