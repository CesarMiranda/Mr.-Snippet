import { Component, OnInit } from '@angular/core';
import { SnippetService } from '../../services/snippet.service';
import { Observable } from 'rxjs';
import { SnippetData } from '../../interfaces/snippet.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  snippets: Observable<SnippetData>;

  constructor(
    private snippetService: SnippetService
  ) {}

  ngOnInit() {

    this.snippets = this.snippetService.getAllSnippets();
  }

}
