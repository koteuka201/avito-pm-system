import { ApiTagsEnum, useApiQuery } from "@shared/api";
import { GetUsersResponse } from "./model";

export const useGetUsers=()=>useApiQuery<GetUsersResponse>([ApiTagsEnum.Users], '/api/v1/users')