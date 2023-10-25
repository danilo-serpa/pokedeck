export interface Response<T> {
  data: T;
  status?: number;
  count?: number;
  page?: number;
  pageSize?: number;
  totalCount?: number;
}
