import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Author } from 'src/models/IAuthor';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: ApiClientService, private fb: FormBuilder) { }
  getAuthorsListing(): Observable<Author[]> {
    return this.http.get('Author/AuthorList');
  }

  saveAuthors(data: any): Observable<any> {
    return this.http.post('Author/saveAuthor', data);
  }
  getAuthorDetailsById(Id: any): Observable<any> {
      return this.http.getById('Author/AuthorById', Id);
  }
  updateAuthorsRecord(data: any): Observable<boolean> {
    return this.http.update('Author/UpdateAuthor', data);
  }
  deleteAuthors(Id: any): Observable<any> {
    return this.http.delete('Author/DeleteAuthor', Id);
  }
  setupAuthorForm(): FormGroup {
    return this.fb.group({
      authorName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNo: ['', Validators.required],
      city: ['',],
      dob: [null,],
      residenceAddress: ['']
    });

  }
}
