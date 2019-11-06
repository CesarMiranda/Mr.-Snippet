import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  init = {
    height: 400,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };

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

}
