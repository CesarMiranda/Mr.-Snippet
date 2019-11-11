import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CategoryModalPage } from '../category-modal/category-modal.page';
import { Category } from '../../interfaces/category.interface';
import { SnippetService } from '../../services/snippet.service';
import { Snippet } from '../../interfaces/snippet.interface';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.page.html',
  styleUrls: ['./add-snippet.page.scss'],
})
export class AddSnippetPage implements OnInit {

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

  categories: Category[];
  snippet: Snippet;
  idUser = 3;
  loading = false;

  constructor(
    private modalCtrl: ModalController,
    private snippetService: SnippetService,
    private toastCtrl: ToastController
  ) {
    this.categories = [];
    this.snippet = {
      id: null,
      title: '',
      subtitle: '',
      body: '',
      idUser: null,
      created_at: null,
      updated_at: null
    };
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
  }

  deleteCategory(category: any) {
    const index = this.categories.findIndex((x) => x === category);
    this.categories.splice(index, 1);
  }

  onStoreSnippet() {

    this.loading = true;

    this.snippet.idUser = this.idUser;
    this.snippet.categories = this.categories;

    this.snippetService.storeASnippet(this.snippet)
      .subscribe((respSnippet: Snippet) => {
        this.loading = false;
        this.presentToast();
        this.snippet = {
          id: null,
          title: '',
          subtitle: '',
          body: '',
          idUser: null,
          created_at: null,
          updated_at: null
        };
        this.categories = [];
      }, error => {
        this.loading = false;
      });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Snippet Creado!',
      duration: 2000
    });
    toast.present();
  }

}
