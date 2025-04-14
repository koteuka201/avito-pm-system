import { Board } from "@shared/api"
import { ClassNameProps } from "@shared/lib"
import { BoardCardItem } from "./boardCardItem"
import { BoardCardItemSkeleton } from "./boardCardItemSkeleton"

export type ListRendererProps={
  readonly boards: Board[] | undefined
  readonly isLoading: boolean
  readonly isError: boolean
} & ClassNameProps

export const ListRenderer=({boards, isLoading, isError}:ListRendererProps)=>{
  
  if(isError){
    return(
      <div className="flex items-center">
        Не удалось получить доски. Попробуйте позже!
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 1 }).map((_, i) => (
            <BoardCardItemSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  if(boards.length===0){
    return(
      <div className="flex justify-center text-lg mt-4">
        Нет досок!
      </div>
    )
  }

  return(
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((board)=>(
          <BoardCardItem
            key={board.id}
            {...board}
          />
        ))}
      </div>
    </div>
  )
}