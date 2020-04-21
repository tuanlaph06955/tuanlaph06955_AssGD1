import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/layouts/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './client/layouts/about/about.component';
import { ContactComponent } from './client/layouts/contact/contact.component';
import { NewComponent } from './client/layouts/news/new/new.component';

const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path: 'admin', component:AdminComponent  },
  { path: 'about', component:AboutComponent  },
  { path: 'contact', component:ContactComponent  },
  { path: 'new', component:NewComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
