import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddSnippetPage } from './add-snippet.page';
import { ComponentsModule } from '../../components/components.module';
import { CategoryModalPageModule } from '../category-modal/category-modal.module';
import { CategoryModalPage } from '../category-modal/category-modal.page';
import { QuillModule } from 'ngx-quill';

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
    CategoryModalPageModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ]
      }
    })
  ],
  declarations: [AddSnippetPage]
})
export class AddSnippetPageModule {}
