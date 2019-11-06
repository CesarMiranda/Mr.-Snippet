import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image/image.pipe';
import { DomSeguroPipe } from './dom-seguro/dom-seguro.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    DomSeguroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagePipe, DomSeguroPipe]
})
export class PipesModule { }
