import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

// import hljs from 'highlight.js/lib/highlight';
// import css from 'highlight.js/lib/languages/css';
// // hljs.registerLanguage('css', css);

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Snippet } from '../../interfaces/snippet.interface';
import { HighlightService } from './../../services/highlight.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent implements OnInit, AfterViewChecked {

  highlighted = false;

  testCode = `
  pre {
    display: flex;
    margin-bottom: 0;
    border-radius: 5px;
  }
  `;

  @Input() snippet: Snippet;
  @ViewChild('code', {static: false}) code: ElementRef;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private highlightService: HighlightService
  ) {
  }

  ngOnInit() {
    // hljs.initHighlightingOnLoad();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500
    });

    await toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      buttons: [
        {
          text: 'Agregar a Favoritos',
          icon: 'heart-empty',
          handler: () => {
            this.presentToast('Se agrego a favoritos');
          }
        },
        {
          text: 'Eliminar de favoritos',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentToast('Se elimino de favoritos');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ],
    });

    await actionSheet.present();
  }

  ngAfterViewChecked() {

    if (this.snippet && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
    // // document.querySelectorAll('div.pre').forEach((block) => {
    // //   console.log(block);
    // //   hljs.highlightBlock(block);
    // // });
    // hljs.highlightBlock(this.code.nativeElement);
  }

}
