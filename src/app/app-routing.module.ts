import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestMainComponent } from './dest-main/dest-main.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { OpratorsComponent } from './oprators/oprators.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'designation', component: DestMainComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'operators', component: OpratorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
