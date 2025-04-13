import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetAllBoardResponse } from "./model";

export const useGetAllBoards=()=>useApiQuery<GetAllBoardResponse>([ApiTagsEnum.Board], '/api/v1/boards')