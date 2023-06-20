import type {  ResponseTypeEnum } from '@/enums/httpEnum'
import type {
  AxiosError,
  AxiosRequestConfig,
  RawAxiosRequestHeaders
} from 'axios'

export type ResponseError = Error | AxiosError

export interface RequestHeaders extends RawAxiosRequestHeaders {
  Authorization?: string
}

export interface RequestConfig<T = any> extends AxiosRequestConfig {
  url: string
  method?: 'post' |'get'|'put'|'delete'
  data?: T
  params?: T
  headers?: RequestHeaders
  responseType?: ResponseTypeEnum
}

export interface Result<T = any> {
  code?: number
  data?: T
  msg?: string
}

declare module 'axios' {
  interface AxiosResponse{
    code?:number
  }
}