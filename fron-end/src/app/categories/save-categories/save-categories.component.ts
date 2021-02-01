import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/models/ICategory';

@Component({
  selector: 'app-save-categories',
  templateUrl: './save-categories.component.html',
  styleUrls: ['./save-categories.component.css']
})
export class SaveCategoriesComponent implements OnInit {
  saveCategoriesForm: FormGroup;
  categoryId: any;
  category: Category;
  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  onCategoriesFormSubmit(formData: FormGroup) {
    if (this.categoryId != null) {
      this.category = formData.value;
      this.category.id = this.categoryId;
      this.service.updateCategory(this.category).subscribe(res => this.router.navigate(['/categories/listing']))
    } else {
      this.service.saveCategories(formData.value).subscribe(res => this.router.navigate(['/categories/listing']));
    }
  }
  ngOnInit(): void {
    this.saveCategoriesForm = this.service.setupCategoryForm();
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    if (this.categoryId != null) {
      this.service.getCategoryById(this.categoryId).subscribe(cat => {
        this.category = cat;
        this.saveCategoriesForm.patchValue(this.category);
      })
    }
  }

}
