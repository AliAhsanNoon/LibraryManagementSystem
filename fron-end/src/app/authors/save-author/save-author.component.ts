import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/models/IAuthor';

@Component({
  selector: 'app-save-author',
  templateUrl: './save-author.component.html',
  styleUrls: ['./save-author.component.css']
})
export class SaveAuthorComponent implements OnInit {

  authorForm: FormGroup;
  authorId: any;
  author: Author;

  constructor(private service: AuthorService, private activatedRoute: ActivatedRoute) { }

  onAuthorFormSubmit(formData: FormGroup) {
    if (this.authorId != null) {
      this.author = formData.value;
      this.author.id = this.authorId;
      this.service.updateAuthorsRecord(this.author).subscribe(saveResponse => console.log('updatedAuthor', saveResponse))

    } else {
      this.service.saveAuthors(formData.value).subscribe(saveResponse => console.log('ResonseSaveAuth', saveResponse))
    }

  }
  ngOnInit(): void {
    this.authorForm = this.service.setupAuthorForm();
    this.authorId = this.activatedRoute.snapshot.params['id'];
    if (this.authorId != null) {
      console.log(this.authorId);

      this.service.getAuthorDetailsById(this.authorId).subscribe(authorDetail => {
        this.author = authorDetail;
        this.authorForm.patchValue(this.author);

      });
    }
  }

}
