import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  category: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getUrlParams();
  }

  getUrlParams() {
    this.activatedRoute.params.subscribe( params => {
      const id = params.id;
      this.onGetCategory(id);
    });
  }

  onGetCategory(id: number) {
    this.categoryService.getCategory(id)
      .subscribe((resp: Category) => {
        this.category = resp;
      });
  }

}
