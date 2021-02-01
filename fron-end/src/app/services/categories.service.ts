import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/ICategory';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: ApiClientService) { }

  getCategoriesList(): Observable<Category[]> {
    return this.http.get('categories/categorieslist');
  }
}
