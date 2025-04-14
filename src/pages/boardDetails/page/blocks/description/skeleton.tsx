import { Skeleton } from "@shared/components"

export const DescriptionSkeleton=()=>{
  return(
    <div>
      <Skeleton className="h-8 w-48"></Skeleton>
      <Skeleton className="h-6 w-72 mt-2"></Skeleton>
    </div>
  )
}