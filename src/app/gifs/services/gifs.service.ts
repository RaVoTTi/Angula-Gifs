import { Gif, SearchGifsResponse } from './../interfaces/gifs.inteface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _api_key: string = 'jdrNJ1pN6133kTve7aeNrVuQLTNRJgOh';
  private _serviceUrl : string = 'https://api.giphy.com/v1/gifs'
  public results: Gif[] = [];
  private _historial: string[] = [];
  private _limit: number = 10;
  get historial() {
    return [...this._historial];
  }
  get limit() {
    return this._limit;
  }
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  searchGifs(query: string) {
    query = query.toLocaleLowerCase();
    if (!this.historial.includes(query)) {
      this._historial.unshift(query);
      this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this.historial));
      localStorage.setItem('resultados', JSON.stringify(this.results));
    }
    const params = new HttpParams()
      .set('api_key', this._api_key)
      .set('q', query)
      .set('limit', this.limit);

    this.http
      .get<SearchGifsResponse>(
        `${this._serviceUrl}/search`, {params}
      )
      .subscribe((resp: SearchGifsResponse) => {
        this.results = resp.data;
        console.log(this.results);
      });
  }

  limitGifs(nuevo: number) {
    this._limit = nuevo;
    this.searchGifs(this.historial[0]);
  }
}
