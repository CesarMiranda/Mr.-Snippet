import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../../interfaces/category.interface';
import { AddCategoryModalPage } from '../add-category-modal/add-category-modal.page';
import { AddTagModalPage } from '../add-tag-modal/add-tag-modal.page';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  selectedCategories: Category[];
  categories: Observable<Category[]>;

  constructor(
    private modalCtrl: ModalController,
    private categoryService: CategoryService
  ) {
    this.selectedCategories = [];
  }

  ngOnInit() {
    this.onGetCategories();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  onGetCategories() {
    this.categories = this.categoryService.getAllCategories();
  }

  addCategory() {
    this.modalCtrl.dismiss({
      categories: this.selectedCategories
    });
  }

  getCategory(event: any) {
    if (event.detail.checked) {
      const value = event.detail.value;
      this.selectedCategories.push(value);
      console.log(this.selectedCategories);
    } else {
      const info = event.detail.value;
      const index = this.selectedCategories.findIndex((x) => x === info);
      this.selectedCategories.splice(index, 1);
      console.log(this.selectedCategories);
    }
  }

  async showAddCategoryModal() {
    const modal = await this.modalCtrl.create({
      component: AddCategoryModalPage
    });
    await modal.present();
  }

  async showAddTagModal() {
    const modal = await this.modalCtrl.create({
      component: AddTagModalPage
    });
    await modal.present();
  }

}
