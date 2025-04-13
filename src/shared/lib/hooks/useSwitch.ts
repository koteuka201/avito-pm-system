import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const useSwitch = (
  state: boolean | undefined = false
): [boolean, Dispatch<SetStateAction<boolean>>, () => void, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(state)

  const handleSwitch = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return [isOpen, setIsOpen, handleSwitch, handleClose, handleOpen]
}
