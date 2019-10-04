import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetComponent } from './snippet/snippet.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SnippetsComponent,
    SnippetComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, SnippetsComponent]
})
export class ComponentsModule { }
