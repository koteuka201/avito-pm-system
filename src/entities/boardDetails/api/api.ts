import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetBoardTasksResponse } from "./model";

export const useGetBoardTasksById=({ boardId }: { boardId: string })=>useApiQuery<GetBoardTasksResponse>([ApiTagsEnum.BoardDetails], `/api/v1/boards/${boardId}`)