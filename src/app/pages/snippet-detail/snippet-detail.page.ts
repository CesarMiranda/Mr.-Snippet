import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnippetService } from '../../services/snippet.service';
import { Snippet } from '../../interfaces/snippet.interface';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.page.html',
  styleUrls: ['./snippet-detail.page.scss'],
})
export class SnippetDetailPage implements OnInit, AfterViewChecked {

  snippet: Snippet;
  highlighted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snippetService: SnippetService,
    private highlightService: HighlightService
  ) { }

  ngOnInit() {
    this.getUrlParams();
  }

  ngAfterViewChecked() {
    if (this.snippet && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  getUrlParams() {
    this.activatedRoute.params.subscribe( params => {
      const id = params.id;
      this.getSnippet(id);
    });
  }

  getSnippet(id: number) {
    this.snippetService.getSnippet(id)
      .subscribe( snippet => {
        console.log(snippet);
        this.snippet = snippet;
      });
  }

}
