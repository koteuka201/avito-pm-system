import { DescriptionSkeleton } from "./skeleton"

export type DescriptionBlockProps={
  readonly description: string
  readonly name: string
  readonly isLoading: boolean
}

export const DescriptionBlock=({description, name, isLoading}:DescriptionBlockProps)=>{
  return(
    <div className="flex items-center justify-between">
      <div>
        {isLoading ? (
          <DescriptionSkeleton />
        ) : (
          <>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-muted-foreground mt-1">{description}</p>
          </>
        )}
      </div>
    </div>
  )
}