import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';

import { Book } from 'src/models/IBooks';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { of } from 'rxjs';
import { HelperService } from '../../shared/helper.service';
@Injectable({
    providedIn: 'root'
})

export class BookResolver implements Resolve<Book[] | string> {

    constructor(private service: BooksService, private helper: HelperService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[] | string> {
        return this.service.getBooksList().pipe(
            catchError(err => of(this.helper.handleError(err)))
        );
    }
}
