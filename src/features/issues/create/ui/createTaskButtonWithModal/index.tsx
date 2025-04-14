import { CreateOrUpdateTaskModal } from "@features/issues/shared"
import { Button } from "@shared/components"
import { useSwitch } from "@shared/lib"
import { useCallback } from "react"
import { useParams } from "react-router-dom"

export const CreateTaskButtonWithModal=()=>{

  const {id}=useParams<{id: string}>()
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()

  const handleClick=useCallback(()=>{
    handleOpen()
  },[handleOpen])

  return(
    <>
      <Button onClick={handleClick}>
        Создать задачу
      </Button>
      <CreateOrUpdateTaskModal
        mode="create"
        isOpen={isOpen}
        onClose={handleClose}
        boardId={Number(id)}
      />
    </>
  )
}