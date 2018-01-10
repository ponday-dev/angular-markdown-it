import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';
import { switchMap } from 'rxjs/operators';

import { MarkdownService } from '../../services/markdown.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  @ViewChild('markdown') markdown: ElementRef;

  markdownText: string;
  private text$ = new ReplaySubject<string>(1);
  private onChangeSubscription: Subscription;

  constructor(private md: MarkdownService) { }

  ngOnInit() {
    this.onChangeSubscription = this.text$.pipe(
      switchMap(text => this.md.render(text))
    )
    .subscribe(
      html => this.markdownText = html,
      err => {
        console.error(err);
        this.markdownText = "";
      }
    );
  }

  onChangeText(text: string) {
    this.text$.next(text);
  }

}
