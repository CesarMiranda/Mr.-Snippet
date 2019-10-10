import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.onGetCategories();
  }

  onGetCategories() {
    this.categories = this.categoryService.getAllCategories();
  }

}
