import { useParams } from "react-router-dom"
import { BoardBlock, DescriptionBlock } from "./blocks"
import { useGetBoardInfoById, useGetBoardTasksById } from "@entities/boardDetails"
import { useGetAllBoards } from "@entities/boards"
import { TaskStatusEnum } from "@shared/api"
import { useMemo } from "react"

export const BoardDetailsPage=()=>{

  const {id}=useParams<{id: string}>()

  const { data: boardTasks, isLoading: isBoardTasksLoading, isFetching: isBoardTasksFetching } = useGetBoardTasksById({ boardId: id ?? "" })
  const { data: boards, isLoading: isAllBoardsLoading, isFetching: isAllBoardsFetching } = useGetAllBoards()
  const { board } = useGetBoardInfoById(id ?? "", boards?.data)

  const tasksByStatus = useMemo(() => {
    const tasks = Array.isArray(boardTasks?.data) ? boardTasks.data : []
    
    return {
      [TaskStatusEnum.Backlog]: tasks.filter((task) => task.status === TaskStatusEnum.Backlog),
      [TaskStatusEnum.InProgress]: tasks.filter((task) => task.status === TaskStatusEnum.InProgress),
      [TaskStatusEnum.Done]: tasks.filter((task) => task.status === TaskStatusEnum.Done),
    }
  }, [boardTasks])

  if (!id) {
    return (
      <div className="flex justify-between text-center text-2xl">
        Не удалось загрузить доску!
      </div>
    )
  }

  return(
    <div className="space-y-6">
      <DescriptionBlock isLoading={isAllBoardsLoading || isAllBoardsFetching} description={board?.description} name={board?.name} />
      <BoardBlock isLoading={isBoardTasksLoading || isBoardTasksFetching} tasksByStatus={tasksByStatus} boardId={Number(id)} />
    </div>
  )
}