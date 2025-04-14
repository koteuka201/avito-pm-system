import { TaskCardItem, TaskCardItemSkeleton } from "@entities/issues"
import { TaskShortInfo, TaskStatusEnum } from "@shared/api"

export type BoardBlockProps={
  readonly boardId: number
  readonly isLoading: boolean
  readonly tasksByStatus: Record<TaskStatusEnum, TaskShortInfo[]>
}

export const statusLabels: Record<TaskStatusEnum, string> = {
  [TaskStatusEnum.Backlog]: "К работе",
  [TaskStatusEnum.InProgress]: "В процессе",
  [TaskStatusEnum.Done]: "Выполнены",
}

export const BoardBlock=({tasksByStatus,isLoading, boardId}:BoardBlockProps)=>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {(Object.entries(statusLabels) as [TaskStatusEnum, string][]).map(([status, label]) => (
        <div key={status} className="space-y-4">
          <h2 className="font-semibold text-lg border-b pb-2">{label}</h2>
          <div className="space-y-3">
            {isLoading ? (
              [...new Array(3)].map((_, index) => (
                <TaskCardItemSkeleton key={index} />
              ))
            ) : tasksByStatus[status]?.length > 0 ? (
              tasksByStatus[status]?.map((task) => (
                <TaskCardItem key={task.id} isShortVariant boardId={boardId} {...task} />
              ))
            ) : (
              <div className="text-center p-4 text-muted-foreground text-sm border border-dashed rounded-md">
                Нет задач
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}