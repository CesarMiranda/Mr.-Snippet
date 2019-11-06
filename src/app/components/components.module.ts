import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetComponent } from './snippet/snippet.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SnippetsComponent,
    SnippetComponent,
    MenuComponent
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
    MenuComponent
  ]
})
export class ComponentsModule { }
