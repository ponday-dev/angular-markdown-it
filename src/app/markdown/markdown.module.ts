import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { MarkdownService } from './services/markdown.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MarkdownEditorComponent],
  declarations: [MarkdownEditorComponent],
  providers: [MarkdownService]
})
export class MarkdownModule { }
