import { map, Observable } from 'rxjs';
import { Response } from '../models/response.model';

export function handleResponse<T>() {
  return (source: Observable<Response<T>>): Observable<T> => {
    return source.pipe(map(({ data }) => data));
  };
}
