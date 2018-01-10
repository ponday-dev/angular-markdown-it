import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as MarkdownIt from 'markdown-it';

@Injectable()
export class MarkdownService {

  private md: MarkdownIt.MarkdownIt;

  constructor() {
    this.md = MarkdownIt();
  }

  render(text: string): Observable<string>{
    return fromPromise(this.renderPromise(text));
  }

  private renderPromise(text: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const result = this.md.render(text);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

}
