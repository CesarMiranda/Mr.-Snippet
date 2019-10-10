import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from '../../interfaces/snippet.interface';
import { SnippetService } from '../../services/snippet.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss'],
})
export class SnippetsComponent implements OnInit {

  snippets: Observable<Snippet[]>;

  constructor(
    private snippetService: SnippetService
  ) { }

  ngOnInit() {
    this.snippets = this.snippetService.getAllSnippets();
  }

}
