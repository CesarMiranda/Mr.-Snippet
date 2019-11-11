import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  @Input() categoryID: number;
  categories: [];
  category: Category;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.onGetCategoryName(this.categoryID);
  }

  deleteCategory(categoryID: number) {
    const index = this.categories.findIndex((x) => x === categoryID);
    this.categories.splice(index, 1);
  }

  onGetCategoryName(categoryID: any) {
    this.categoryService.getCategory(categoryID)
      .subscribe((categoryResp: Category) => {
        this.category = categoryResp;
      });
  }

}
