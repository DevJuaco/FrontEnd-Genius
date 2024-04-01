import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '@interfaces/category';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE_URL: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`)
      .pipe(
        map(categories => categories.filter (category => category.available))
      )
  }

  updateCategory(category: Category) {
    return this.http.put(`${this.BASE_URL}/categories`, category)
  }

  createCategory(category: Category) {
    return this.http.post<Category>(`${this.BASE_URL}/categories`, category)
  }
}
