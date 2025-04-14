import { ListRenderer, useGetAllTasks, useTasksFilter } from "@entities/issues"
import { TasksFilterBar } from "./blocks"
import { useMemo } from "react"

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
    <div className="">
      <TasksFilterBar isLoading={isFetching || isLoading} />
      <ListRenderer 
        className="mt-2"
        tasks={filteredTasks} 
        isError={isError} 
        isFetching={isFetching} 
        isLoading={isLoading} 
      />
    </div>
  )
}