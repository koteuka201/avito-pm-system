import { useSearchParams } from "react-router-dom"
import { TasksFilter } from "../types"
import { TaskStatusEnum } from "@shared/api"

export const useTasksFilter = () => {
  const [params, setParams] = useSearchParams()

  const filter: TasksFilter = {
    status: params.get("status") as TaskStatusEnum || undefined,
    board: params.get("board") || undefined,
    title: params.get("title") || undefined,
    assigned: params.get("assigned") || undefined,
  }

  const setFilter = (newFilter: Partial<TasksFilter>) => {
    const updated = new URLSearchParams(params)
    Object.entries(newFilter).forEach(([key, value]) => {
      if (value) updated.set(key, value)
      else updated.delete(key)
    })
    setParams(updated)
  }

  return { filter, setFilter }
}
