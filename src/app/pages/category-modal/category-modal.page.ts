import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../../interfaces/category.interface';
import { ActionSheetController } from '@ionic/angular';
import { AddCategoryModalPage } from '../add-category-modal/add-category-modal.page';
import { AddTagModalPage } from '../add-tag-modal/add-tag-modal.page';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  selectedCategories: Category[];

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.selectedCategories = [];
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
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

  async showMoreOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      buttons: [
        {
          text: 'Nueva Categoría',
          icon: 'add',
          handler: () => {
            this.showAddCategoryModal();
          }
        },
        {
          text: 'Nueva Etiqueta',
          icon: 'pricetags',
          handler: () => {
            this.showAddTagModal();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
