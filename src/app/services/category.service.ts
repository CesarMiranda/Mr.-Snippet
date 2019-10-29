import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category.interface';
import { environment } from './../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${ environment.coreUrl }/categories`)
      .pipe(tap(console.log));
  }

  storeACategory(category: Category) {

    return this.http.post<Category>(`${ environment.coreUrl }/categories`, category)
      .pipe(tap(console.log));
  }

  getCategory(categoryId: number) {
    return this.http.get<Category>(`${ environment.coreUrl }/categories/${ categoryId }`)
      .pipe(tap(console.log));
  }
}
