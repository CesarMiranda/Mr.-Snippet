import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryModalPage } from './category-modal.page';
import { AddCategoryModalPage } from '../add-category-modal/add-category-modal.page';
import { AddCategoryModalPageModule } from '../add-category-modal/add-category-modal.module';

@NgModule({
  entryComponents: [AddCategoryModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCategoryModalPageModule
  ],
  declarations: [CategoryModalPage]
})
export class CategoryModalPageModule {}
