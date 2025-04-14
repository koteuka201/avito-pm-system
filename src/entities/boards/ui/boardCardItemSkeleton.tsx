import { Card, CardFooter, CardHeader, Skeleton } from "@shared/components"

export const BoardCardItemSkeleton=()=>{
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-60" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  )
}