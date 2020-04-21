import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { NewDetailComponent } from './new-detail/new-detail.component';

const routes: Routes = [
  { path:'new', component:NewComponent },
  { path: 'new/:id', component:NewDetailComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
