import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryModalPage } from './category-modal.page';
import { AddCategoryModalPage } from '../add-category-modal/add-category-modal.page';
import { AddCategoryModalPageModule } from '../add-category-modal/add-category-modal.module';
import { AddTagModalPage } from '../add-tag-modal/add-tag-modal.page';
import { AddTagModalPageModule } from '../add-tag-modal/add-tag-modal.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  entryComponents: [
    AddCategoryModalPage,
    AddTagModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCategoryModalPageModule,
    AddTagModalPageModule,
    PipesModule
  ],
  declarations: [CategoryModalPage]
})
export class CategoryModalPageModule {}
