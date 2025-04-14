import { Card, CardContent, CardFooter, Skeleton } from "@shared/components"

export const TaskCardItemSkeleton=()=>{
  return (
    <Card className="cursor-pointer">
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-5 w-2/4" />
        <Skeleton className="h-4 w-4/6" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Skeleton className="h-6 w-16 rounded-full" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  )
}
