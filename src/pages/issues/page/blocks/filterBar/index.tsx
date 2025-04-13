import { useTasksFilter } from "@entities/issues"
import { TaskStatusEnum } from "@shared/api"
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { InputDebounce } from "@shared/lib"
import { useState } from "react"

export const TasksFilterBar = () => {
  const { filter, setFilter } = useTasksFilter()

  const [titleInput, setTitleInput] = useState("")
  const [assignedInput, setAssignedInput] = useState("")

  const debouncedSetTitle = InputDebounce((value: string) => {
    setFilter({ title: value })
  }, 500)
  
  const debouncedSetAssigned = InputDebounce((value: string) => {
    setFilter({ assigned: value })
  }, 500)

  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Input
        placeholder="Название"
        value={titleInput ?? ""}
        onChange={(e) => {
          setTitleInput(e.target.value)
          debouncedSetTitle(e.target.value)
        }}
        className="w-64"
      />
      <Input
        placeholder="Исполнитель"
        value={assignedInput ?? ""}
        onChange={(e) => {
          setAssignedInput(e.target.value)
          debouncedSetAssigned(e.target.value)
        }}
        className="w-48"
      />
      <Select
        value={filter.status}
        onValueChange={(value) => setFilter({ status: value as TaskStatusEnum })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Статус" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={TaskStatusEnum.BackLog}>К работе</SelectItem>
          <SelectItem value={TaskStatusEnum.InProgress}>В процессе</SelectItem>
          <SelectItem value={TaskStatusEnum.Done}>Сделана</SelectItem>
        </SelectContent>
      </Select>

      <Input
        placeholder="ID доски"
        value={filter.board ?? ""}
        onChange={(e) => setFilter({ board: e.target.value })}
        className="w-48"
      />
    </div>
  )
}
