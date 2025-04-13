import { ApiTagsEnum, useApiMutation } from "@shared/api";
import { CreateTaskBody } from "./model";

export const useCreateTask=()=>useApiMutation<CreateTaskBody>({url: `api/v1/tasks/create`, method: 'POST', invalidateTags: [ApiTagsEnum.Tasks]})