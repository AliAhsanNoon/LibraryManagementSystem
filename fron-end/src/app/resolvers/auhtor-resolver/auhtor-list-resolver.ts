import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { HelperService } from 'src/app/shared/helper.service';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class AuthorListResolver implements Resolve<any | string>{

    constructor(private service: BooksService, private helperService: HelperService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.loadAuthors().pipe(
            catchError(err => of(this.helperService.handleError(err)))
        )
    }

}