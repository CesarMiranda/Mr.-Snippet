import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Observable<Category[]>;
  category: Category = {
    id: null,
    title: '',
    created_at: null,
    updated_at: null
  };

  constructor(
    private categoryService: CategoryService,
    private toastController: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.onGetCategories();
  }

  onGetCategories() {
    this.categories = this.categoryService.getAllCategories();
  }

  onStoreCategory() {
    this.categoryService.storeACategory(this.category)
      .subscribe((categoryResponse: Category) => {
        this.category.title = '';
        this.presentToast(categoryResponse.title);
        this.onGetCategories();
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: `Categoría ${ message } creada`,
      duration: 2000,
      position: 'bottom',
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    toast.present();
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una foto',
      buttons: [
        {
          text: 'Tomar Foto',
          handler: () => {
            // this.takePicture();
          }
        },
        {
          text: 'Elegir de la biblioteca',
          handler: () => {
            // this.getPicture();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

}
