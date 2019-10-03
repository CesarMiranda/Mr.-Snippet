import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddSnippetPage } from './add-snippet.page';
import { ComponentsModule } from '../../components/components.module';
import { CategoryModalPageModule } from '../category-modal/category-modal.module';
import { CategoryModalPage } from '../category-modal/category-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddSnippetPage
  }
];

@NgModule({
  entryComponents: [
    CategoryModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    CategoryModalPageModule
  ],
  declarations: [AddSnippetPage]
})
export class AddSnippetPageModule {}
