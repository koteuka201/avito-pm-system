import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./api"
import { MutationOptions } from "../mutationOptionsType"
import { ApiTagsEnum } from "../apiTagsEnum"
import { AxiosRequestConfig } from "axios"
// import qs from 'qs'


export const useApiQuery = <R>(key: ApiTagsEnum[], url: string, params?: Record<string, any>) => {
  return useQuery<R>({
    queryKey: [key,url, params],
    queryFn: async () => {
      const response = await api.get<R>(url, { params,
        // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }) 
       })
      return response.data
    },
    staleTime: 600000,
    retry: 2
  })
}

export const useApiMutation = <TData = unknown, TResponse = any>(
  { url, method, invalidateTags, params}: MutationOptions
) => {
  const queryClient = useQueryClient()

  return useMutation<TResponse, Error, { data: TData; headers?: any; params?: Record<string, any> }>({
    mutationFn: async ({ data, headers, params: mutationParams  }) => {
      const config: AxiosRequestConfig<TData> = {
        url,
        method,
        data,
        headers,
        params: {...params, ...mutationParams},
      }
      const response = await api(config)
      return response.data
    },
    onSuccess: () => {
      if (invalidateTags?.length) {
        invalidateTags.forEach(tag => queryClient.invalidateQueries({ queryKey: [[tag]] }))
      }
    }
  })
}