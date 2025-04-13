import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetTasksResponse } from "./model";

export const useGetAllTasks=()=>useApiQuery<GetTasksResponse>([ApiTagsEnum.Tasks], '/api/v1/tasks')