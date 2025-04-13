import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { UpdateTaskArgs, UpdateTaskBody } from "./model";

export const useUpdateTask=({taskId}: UpdateTaskArgs)=>useApiMutation<UpdateTaskBody>({url: `api/v1/tasks/update/${taskId}`, method: 'PUT', invalidateTags: [ApiTagsEnum.Tasks]})