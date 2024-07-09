import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestMainComponent } from './dest-main/dest-main.component';

const routes: Routes = [
  {path: 'designation', component: DestMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
