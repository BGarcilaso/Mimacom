import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Properties } from 'src/app/share/models/properties.model';
import { Observable } from 'rxjs';
import { Gif } from 'src/app/share/models/gif.model';

@Injectable()
export class GifService {

  private gifsUrl = 'http://api.giphy.com/v1/gifs/';  // URL to web api

  constructor(private http: HttpClient) { }

    getTrendingGifs(offset: number, limit: number): Observable<any>{
      const key = Properties.API_KEY;
      return this.http.get<Gif[]>(`${this.gifsUrl}trending?api_key=${key}&offset=${offset}&limit=${limit}`);
    }

    getSearchingGifs(offset: number, limit: number, search: string): Observable<any>{
      const key = Properties.API_KEY;
      return this.http.get<Gif[]>(`${this.gifsUrl}search?q=${search}&api_key=${key}&offset=${offset}&limit=${limit}`);
    }

}
