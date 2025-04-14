import { ListRenderer, useGetAllBoards } from "@entities/boards"

export const BoardsPage=()=>{
  
  const {data:boards, isLoading, isFetching, isError}=useGetAllBoards()
  
  return(
    <>
      <ListRenderer 
        boards={boards?.data}
        isLoading={isFetching || isLoading}
        isError={isError}
      />
    </>
  )
}