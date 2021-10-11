import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasicAppComponent } from './basic-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BasicAppComponent
  ],
  bootstrap: [BasicAppComponent]
})
export class AppModule { }
