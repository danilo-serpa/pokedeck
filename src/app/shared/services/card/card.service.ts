import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from '../../models/card.model';
import { Response } from '../../models/response.model';
import { handleResponse } from '../../operators/handle-response.operator';

@Injectable({
  providedIn: 'root',
})
export class CardService {
 private url = `${environment.apiUrl}/cards`;

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Response<Card[]>>(this.url).pipe(handleResponse());
  }
}
