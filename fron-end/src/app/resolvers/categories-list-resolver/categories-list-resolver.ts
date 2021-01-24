import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { HelperService } from 'src/app/shared/helper.service';

@Injectable({
    providedIn: 'root'
})

export class CatgeoriesListResolver implements Resolve<any | string>{
    /**
     *
     */
    constructor(private helper: HelperService, private service: BooksService) { }
    resolve() {
        return this.service.loadCategories().pipe(
            catchError(err => of(this.helper.handleError(err)))
        )
    }
}