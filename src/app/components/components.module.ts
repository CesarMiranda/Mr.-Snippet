import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetComponent } from './snippet/snippet.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SnippetsComponent,
    SnippetComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    SnippetsComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
