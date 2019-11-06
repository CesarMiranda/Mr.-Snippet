import { Component, OnInit } from '@angular/core';
import { SnippetService } from '../../services/snippet.service';
import { Observable } from 'rxjs';
import { Snippet } from '../../interfaces/snippet.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  snippets: Observable<Snippet[]>;

  constructor(
    private snippetService: SnippetService,
  ) {}

  ngOnInit() {

    this.snippets = this.snippetService.getAllSnippets();
  }

}
