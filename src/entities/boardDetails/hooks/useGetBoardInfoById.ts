import { Board } from "@shared/api"

export const useGetBoardInfoById=(id: string, boards: Board[] | undefined)=>{
  return {board: boards?.find(board => board.id.toString() === id)}
}