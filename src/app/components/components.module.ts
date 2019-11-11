import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetComponent } from './snippet/snippet.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SnippetsComponent,
    SnippetComponent,
    MenuComponent,
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    SnippetsComponent,
    MenuComponent,
    CategoriesComponent
  ]
})
export class ComponentsModule { }
