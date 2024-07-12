import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestMainComponent } from './dest-main/dest-main.component';
import { DestAddComponent } from './dest-add/dest-add.component';
import { DestListComponent } from './dest-list/dest-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';
import { OpratorsComponent } from './oprators/oprators.component';

@NgModule({
  declarations: [
    AppComponent,
    DestMainComponent,
    DestAddComponent,
    DestListComponent,
    HomeComponent,
    SubjectComponent,
    ObservableComponent,
    OpratorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
