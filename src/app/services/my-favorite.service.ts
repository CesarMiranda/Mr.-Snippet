import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyFavorite } from './../interfaces/myFavorite.interface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyFavoriteService {

  constructor(
    private http: HttpClient
  ) { }

  storeFavorite(favorite: MyFavorite) {
    return this.http.post<MyFavorite>(`${ environment.coreUrl }/favorites`, favorite);
  }
}
