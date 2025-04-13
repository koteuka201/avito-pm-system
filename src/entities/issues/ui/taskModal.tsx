import { useGetAllBoards } from "@entities/boards"
import { useCreateTask, useUpdateTask } from "@features/issues"
import { Priority, TaskStatusEnum } from "@shared/api"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components"
import { useCallback } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { TaskModalForm } from "../lib"
import { useGetUsers } from "@entities/users"

export type TaskModalProps={
  readonly mode: 'edit' | 'create'
  readonly isOpen: boolean
  readonly onClose: ()=>void
  readonly taskId?: number
  readonly assigneeId?: number
  readonly boardId?: number
  readonly description?: string
  readonly title?: string
  readonly status?: TaskStatusEnum
  readonly priority?: Priority
}

export const TaskModal=({
  isOpen,
  mode,
  onClose,
  taskId,
  assigneeId,
  boardId,
  description,
  title,
  status,
  priority
}:TaskModalProps)=>{
  const {control, handleSubmit, reset, formState: {errors}}=useForm<TaskModalForm>({
    defaultValues:{
      boardId: boardId.toString() ?? null,
      title: title ?? null,
      description: description ?? null,
      priority: priority ?? null,
      assigneeId: assigneeId.toString() ?? null, 
      status: status ?? null
    }
  })

  const {data: boards}=useGetAllBoards()
  const {data: users}=useGetUsers()

  const{mutate: create, isPending: isCreatePending}=useCreateTask()
  const{mutate: update, isPending: isUpdatePending}=useUpdateTask({taskId})

  const handleClose=useCallback(()=>{
    reset()
    onClose()
  },[reset, onClose])

  const onSubmit: SubmitHandler<TaskModalForm>=useCallback((data)=>{
    if(!data.assigneeId || !data.description || !data.priority || !data.title || (mode==="create" && !data.boardId)|| (mode==="edit" && !data.status))return

    if(mode==="create"){
      create({data:{
        assigneeId: Number(data.assigneeId),
        description: data.description,
        priority: data.priority,
        title: data.title,
        boardId: Number(data.boardId),
      }},{onSuccess: handleClose}) 
    } else{
      update({data:{
        assigneeId: Number(data.assigneeId),
        description: data.description,
        priority: data.priority,
        title: data.title,
        status: data.status,
      }},{onSuccess: handleClose})   
    }
  },[])

  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode==="create" ? 'Создание задачи' : 'Редактирование задачи'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div>
            <Label htmlFor="title">Название</Label>
            <Controller 
              name="title"
              control={control}
              rules={{
                required: "Это обязательное поле",
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="title"
                  type="text"
                  placeholder="Название"
                />
              )}
            />
            {errors.title && <span className="text-red text-sm">{errors.title.message}</span>}
          </div>
          <div>
            <Label htmlFor="description">Описание</Label>
            <Controller 
              name="description"
              control={control}
              rules={{
                required: "Это обязательное поле",
              }}
              render={({field})=>(
                <Input 
                  {...field}
                  id="description"
                  type="text"
                  placeholder="Описание"
                />
              )}
            />
            {errors.description && <span className="text-red text-sm">{errors.description.message}</span>}
          </div>
          <div>
            <Label htmlFor="boardId">Проект</Label>
            <Controller 
              disabled={!!boardId}
              name="boardId"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Проект" />
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
              )}
            />
            {errors.boardId && <span className="text-red text-sm">{errors.boardId.message}</span>}
          </div>
          <div>
            <Label htmlFor="priority">Приоритет</Label>
            <Controller 
              name="priority"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Приоритет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={null}>Не выбрано</SelectItem>
                    <SelectItem value={Priority.Low}>Низкий</SelectItem>
                    <SelectItem value={Priority.Medium}>Средний</SelectItem>
                    <SelectItem value={Priority.High}>Высокий</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.priority && <span className="text-red text-sm">{errors.priority.message}</span>}
          </div>
          {mode==="edit" &&
            <div>
              <Label htmlFor="status">Статус</Label>
              <Controller 
                name="status"
                control={control}
                rules={{required: "Это обязательное поле"}}
                render={({field})=>(
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={null}>Не выбрано</SelectItem>
                      <SelectItem value={TaskStatusEnum.Backlog}>К работе</SelectItem>
                      <SelectItem value={TaskStatusEnum.InProgress}>В процессе</SelectItem>
                      <SelectItem value={TaskStatusEnum.Done}>Выполнена</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && <span className="text-red text-sm">{errors.status.message}</span>}
            </div>
          }
          <div>
            <Label htmlFor="assigneeId">Исполнитель</Label>
            <Controller 
              name="assigneeId"
              control={control}
              rules={{required: "Это обязательное поле"}}
              render={({field})=>(
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Исполнитель" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value={null}>Не выбрано</SelectItem>
                    {users?.data.map((user) => (
                      <SelectItem key={user.id} value={user.id.toString()}>
                        {user.fullName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.assigneeId && <span className="text-red text-sm">{errors.assigneeId.message}</span>}
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant={'secondary'} onClick={onClose}>
              Отмена
            </Button>
            <Button 
              isLoading={isCreatePending || isUpdatePending} 
              type="submit">
              {mode==="create" ? 'Создать' : 'Обновить'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}