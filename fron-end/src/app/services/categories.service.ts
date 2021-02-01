import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/ICategory';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: ApiClientService, private fb: FormBuilder) { }

  getCategoriesList(): Observable<Category[]> {
    return this.http.get('categories/categorieslist');
  }
  saveCategories(categories: any): Observable<Category> {
    return this.http.post('categories/SaveCategory', categories);
  }
  getCategoryById(Id): Observable<Category> {
    return this.http.getById('categories/CategoryById', Id);
  }
  updateCategory(catData: any): Observable<any> {
    return this.http.update('categories/UpdateCategory', catData);
  }
  deleteCategory(catObj): Observable<any> {
    return this.http.delete('categories/DeleteCategory', catObj);
  }
  setupCategoryForm(): FormGroup {
    return this.fb.group({
      categoryName: ['', Validators.required]
    });
  }
}
