import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestMainComponent } from './dest-main/dest-main.component';
import { DestAddComponent } from './dest-add/dest-add.component';
import { DestListComponent } from './dest-list/dest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DestMainComponent,
    DestAddComponent,
    DestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
