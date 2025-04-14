import { Task } from "@shared/api"
import { ClassNameProps } from "@shared/lib"
import cn from "classnames"
import { TaskCardItem } from "./taskCardItem"
import { TaskCardItemSkeleton } from "./TaskCardItemSkeleton"

export type ListRendererProps={
  tasks: Task[] | undefined
  isLoading: boolean
  isFetching: boolean
  isError: boolean
} & ClassNameProps

export const ListRenderer=({tasks, className, isLoading, isFetching, isError}: ListRendererProps)=>{
  
  if(isError){
    return(
      <div className="flex items-center">
        Не удалось получить задачи. Попробуйте позже!
      </div>
    )
  }

  if(isLoading || isFetching){
    return(
      <div className='flex flex-col gap-2 mt-2'>
        {Array.from({ length: 5 }).map((_, i) => (
          <TaskCardItemSkeleton key={i} />
        ))}
      </div>
    )
  }

  if(tasks.length===0){
    return(
      <div className="flex justify-center text-lg mt-4">
        Нет задач!
      </div>
    )
  }

  return(
    <div className={cn('flex flex-col gap-2', className)}>
      {tasks.map((task)=>(
        <TaskCardItem key={task.id} {...task}/>
      ))}
    </div>
  )
}