import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

// import hljs from 'highlight.js/lib/highlight';
// import css from 'highlight.js/lib/languages/css';
// // hljs.registerLanguage('css', css);

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Snippet } from '../../interfaces/snippet.interface';
import { HighlightService } from './../../services/highlight.service';
import { MyFavoriteService } from '../../services/my-favorite.service';
import { MyFavorite } from './../../interfaces/myFavorite.interface';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent implements OnInit, AfterViewChecked {

  highlighted = false;
  userID = 3;
  favorite: MyFavorite;

  @Input() snippet: Snippet;
  @ViewChild('code', {static: false}) code: ElementRef;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private highlightService: HighlightService,
    private myFavoriteService: MyFavoriteService
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
            this.onStoreFavorite();
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
  }

  onStoreFavorite() {
    this.favorite = {
      user_id: this.userID,
      snippet_id: this.snippet.id
    };

    this.myFavoriteService.storeFavorite(this.favorite)
      .subscribe( () => {
        this.presentToast('Se ha agregado a favoritos');
      });
  }

}
