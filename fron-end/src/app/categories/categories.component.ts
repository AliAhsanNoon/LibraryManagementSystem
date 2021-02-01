import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/ICategory';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'categoryName', 'bookList', 'actions'];
  errorMsg: any;
  bookSelectedValue: string;
  categoriesList: Category[];
  bookList: any[] = [];
  saveCategoriesForm: FormGroup;
  
  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {
    // const bookResolved: any | string = this.activatedRoute.snapshot.data['books'];
    // if (Array.isArray(bookResolved)) {


    // } else {
    //   this.errorMsg = bookResolved;
    // }
  }

  ngOnInit(): void {
    this.service.getCategoriesList().subscribe((res: Category[]) => {
      this.categoriesList = res;
    });
  }

  navigateToAddCategories() {
    this.router.navigate(['/categories/save-categories']);
  }
  navigateToEditCategories(Id: any) {
    this.router.navigate(['/categories/save-categories/', Id]);
  }
  delCat(id) {
    let catObj = {
      "Id": id,
      "IsDeleted": true
    };
    this.service.deleteCategory(catObj).subscribe(res => {
      this.service.getCategoriesList().subscribe(catListResp => this.categoriesList = catListResp);
    })
  }

}
