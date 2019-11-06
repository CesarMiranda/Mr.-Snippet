import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Snippet } from '../interfaces/snippet.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSnippets() {
    return this.http.get<Snippet[]>(`${ environment.coreUrl }/snippets`)
      .pipe(tap(console.log));
  }

  storeASnippet(snippet: Snippet) {
    return this.http.post(`${ environment.coreUrl }/snippets`, snippet );
  }
}
