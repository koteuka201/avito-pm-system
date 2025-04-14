import { useGetAllBoards } from "@entities/boards"
import { useTasksFilter } from "@entities/issues"
import { TaskStatusEnum } from "@shared/api"
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { InputDebounce } from "@shared/lib"
import { useEffect, useRef, useState } from "react"

export const TasksFilterBar = () => {
  const { filter, setFilter } = useTasksFilter()

  const [titleInput, setTitleInput] = useState("")
  const [assignedInput, setAssignedInput] = useState("")

  const {data: boards}=useGetAllBoards()

  const debouncedSetTitle = InputDebounce((value: string) => {
    setFilter({ title: value })
  }, 300)
  
  const debouncedSetAssigned = InputDebounce((value: string) => {
    setFilter({ assigned: value })
  }, 300)

  //Используется для того, чтобы useEffect срабатывал только при монтировании, 
  // но в то же время, чтобы линт не ругался на depArray
  const isFirstRender = useRef(true)

  useEffect(()=>{
    if(isFirstRender.current){
      setTitleInput(filter.title || '')
      setAssignedInput(filter.assigned || '')
      isFirstRender.current=false
    }
  },[filter.title, filter.assigned])

  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Input
        placeholder="Название"
        value={titleInput || ""}
        onChange={(e) => {
          setTitleInput(e.target.value)
          debouncedSetTitle(e.target.value)
        }}
        type="search"
        className="w-64"
      />
      <Input
        placeholder="Исполнитель"
        value={assignedInput || ""}
        onChange={(e) => {
          setAssignedInput(e.target.value)
          debouncedSetAssigned(e.target.value)
        }}
        type="search"
        className="w-48"
      />
      <Select
        value={filter.status}
        onValueChange={(value) => setFilter({ status: value as TaskStatusEnum })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Статус задачи" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={null}>Не выбрано</SelectItem>
          <SelectItem value={TaskStatusEnum.Backlog}>К работе</SelectItem>
          <SelectItem value={TaskStatusEnum.InProgress}>В процессе</SelectItem>
          <SelectItem value={TaskStatusEnum.Done}>Выполнена</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filter.board ?? ""}
        onValueChange={(value) => setFilter({ board: value })}
      >
        <SelectTrigger className="w-64">
          <SelectValue placeholder="Название доски" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={null}>Не выбрано</SelectItem>
          {boards?.data.map((board) => (
            <SelectItem key={board.id} value={board.id.toString()}>
              {board.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
