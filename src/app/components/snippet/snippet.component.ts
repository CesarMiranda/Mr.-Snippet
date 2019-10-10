import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import hljs from 'highlight.js/lib/highlight';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Snippet } from '../../interfaces/snippet.interface';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent implements OnInit, AfterViewInit {

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
    private toastCtrl: ToastController
  ) { }

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

  ngAfterViewInit() {
    hljs.highlightBlock(this.code.nativeElement);
  }

}
