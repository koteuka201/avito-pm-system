import { Priority, Task } from "@shared/api"
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardFooter } from "@shared/components"

export const priorityColors: Record<Priority, string> = {
  Low: "bg-green-100 text-green-800",
  Medium: "bg-blue-100 text-blue-800",
  High: "bg-red-100 text-red-800",
}

export type TaskCardItemProps= Task

export const TaskCardItem=({
  assignee,
  boardId,
  boardName,
  description,
  title,
  id,
  status,
  priority
}:TaskCardItemProps)=>{
  return(
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={()=>{}}>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-2">{title} ({boardName})</h3>
        {description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Badge className={priorityColors[priority]}>
          {priority === Priority.Low ? "Низкий" : priority === Priority.Medium ? "Средний" : "Высокий"}
        </Badge>
        <div className="flex items-center gap-2">
          <span className="text-sm">{assignee.fullName}</span>
          <Avatar className="h-6 w-6">
            <AvatarImage src={assignee.avatarUrl} alt={assignee.fullName} />
            <AvatarFallback>{assignee.fullName.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </CardFooter>
    </Card>
  )
}