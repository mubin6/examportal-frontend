import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllcategories() {
    return this.http.get(`${environment.baseUrl}/category/`);
  }

  saveCategories(category: CategoryDto) {
    return this.http.post(`${environment.baseUrl}/category/`, category);
  }
}
