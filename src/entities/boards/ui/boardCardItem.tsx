import { Badge, Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@shared/components"
import { GENERATE_BOARD_PAGE_URL } from "@shared/config"
import { Link } from "react-router-dom"

export type BoardCardItemProps={
  readonly description: string
  readonly name: string
  readonly id: number
  readonly taskCount: number
}

export const BoardCardItem=({
  description,
  name,
  id,
  taskCount
}:BoardCardItemProps)=>{
  return(
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{taskCount} задач</Badge>
        </div>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link to={GENERATE_BOARD_PAGE_URL(id && id.toString())}>Открыть доску</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}