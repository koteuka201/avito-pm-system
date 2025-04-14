import { ListRenderer, useGetAllTasks, useTasksFilter } from "@entities/issues"
import { TasksFilterBar } from "./blocks"
import { useMemo } from "react"
import { CreateTaskButtonWithModal } from "@features/issues"

export const IssuesPage=()=>{
  const {data, isError, isLoading, isFetching}=useGetAllTasks()
  const { filter } = useTasksFilter()

  const filteredTasks = useMemo(() => {
    return data?.data?.filter((task) => {
      return (
        (!filter.status || task.status === filter.status) &&
        (!filter.board || task.boardId.toString() === filter.board) &&
        (!filter.title || task.title.toLowerCase().includes(filter.title.toLowerCase())) &&
        (!filter.assigned || task.assignee.fullName.toLowerCase().includes(filter.assigned.toLowerCase()))
      )
    }) ?? []
  }, [data?.data, filter])
  
  return(
    <div className="relative">
      <TasksFilterBar isLoading={isFetching || isLoading} />
      <ListRenderer 
        className="mt-2"
        tasks={filteredTasks} 
        isError={isError} 
        isFetching={isFetching} 
        isLoading={isLoading} 
      />
      <div className="fixed bottom-4 right-4 z-10">
        <CreateTaskButtonWithModal className="h-14 px-8" />
      </div>
    </div>
  )
}