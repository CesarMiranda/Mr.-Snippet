import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent implements OnInit {

  @Input() item: number;

  constructor() { }

  ngOnInit() {}

}
