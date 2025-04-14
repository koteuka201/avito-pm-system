import { Skeleton } from "@shared/components"

export const FilterBarSkeleton=() => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-8 w-64" />
    </div>
  )
}
