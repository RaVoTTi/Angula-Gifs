import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public results:any ;
  private _historial: string[] = ['dashboard'];
  private _limit: number = 10;
  get historial() {
    return [...this._historial];
  }
  get limit() {
    return this._limit;
  }
  constructor(private http: HttpClient) {}
  searchGifs(query: string) {
    query = query.toLocaleLowerCase();
    if (!this.historial.includes(query)) {
      this._historial.unshift(query);
      this._historial.slice(0, 10);
      this.http
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=jdrNJ1pN6133kTve7aeNrVuQLTNRJgOh&q=${query}&limit=${this.limit}`)
        .subscribe((resp:any) =>{
          this.results = resp.data
          console.log(this.results)
        });
    }
  }

  limitGifs(nuevo: number) {
    this._limit = nuevo;
  }
}
