import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from '../../models/card.model';
import { Response } from '../../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private url = `${environment.apiUrl}/cards`;

  constructor(private http: HttpClient) {}

  getCards(
    numPage: number,
    pageSize: number,
    search?: string | undefined
  ): Observable<Response<Card[]>> {
    const options = {
      params: new HttpParams()
        .set('page', numPage + 1)
        .set('pageSize', pageSize)
        .set('q', search ? `name:${search}` : '')
    };
    return this.http.get<Response<Card[]>>(this.url, options);
  }
}
