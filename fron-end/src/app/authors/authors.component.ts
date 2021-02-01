import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/models/IAuthor';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authorList: Author[];
  authorSelected: any;
  displayedColumns: string[] = ['id', 'authorName', 'emailAddress', 'booksList', 'actions'];
  constructor(private service: AuthorService, private router: Router) { }
  navigateToAddAuthor() {
    this.router.navigate(['/authors/save-author'])
  }
  navigateToEditAuthor(id) {
    this.router.navigate(['/authors/save-author/', id])
  }
  delAuthor(Id) {
    let authorObj = {
      id: Id,
      isDeleted: true
    }
    this.service.deleteAuthors(authorObj).subscribe(res => {
      this.service.getAuthorsListing().subscribe(list => this.authorList = list)
    })
  }
  ngOnInit(): void {
    this.service.getAuthorsListing().subscribe(authors => this.authorList = authors);
  }

}
