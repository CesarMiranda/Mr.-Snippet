import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryModalPage } from '../category-modal/category-modal.page';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.page.html',
  styleUrls: ['./add-snippet.page.scss'],
})
export class AddSnippetPage implements OnInit {

  categories: any[];

  constructor(private modalCtrl: ModalController) {
    this.categories = [];
  }

  ngOnInit() {
  }

  async openModalCategory() {
    const modal = await this.modalCtrl.create({
      component: CategoryModalPage
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      this.categories = data.categories;
    }

    console.log(this.categories);
  }

  deleteCategory(category: any) {
    const index = this.categories.findIndex((x) => x === category);
    this.categories.splice(index, 1);
  }

}
