import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from './markdown/markdown.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
