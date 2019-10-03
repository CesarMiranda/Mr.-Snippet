import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.page.html',
  styleUrls: ['./add-category-modal.page.scss'],
})
export class AddCategoryModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
