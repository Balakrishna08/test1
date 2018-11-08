import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
@NgModule({
  declarations: [
    AppComponent,ListComponent
  ],
  imports: [
    BrowserModule,FormsModule,ShowHidePasswordModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
