import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SnippetDetailPage } from './snippet-detail.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { HighlightService } from './../../services/highlight.service';

const routes: Routes = [
  {
    path: '',
    component: SnippetDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule
  ],
  declarations: [SnippetDetailPage],
  providers: [
    HighlightService
  ]
})
export class SnippetDetailPageModule {}
