import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './manager-products/product-add/product-add.component';
import { ProductManagerComponent } from './manager-products/product-manager/product-manager.component';
import { ProductUpdateComponent } from './manager-products/product-update/product-update.component';
import { ManagerPDetailComponent } from './manager-products/manager-p-detail/manager-p-detail.component';
import { ManagerBannerComponent } from './manage-banner/manager-banner/manager-banner.component';
import { BannerAddComponent } from './manage-banner/banner-add/banner-add.component';
import { BannerUpdateComponent } from './manage-banner/banner-update/banner-update.component';
import { NewAdminComponent } from './manage-new/new-admin/new-admin.component';
import { NewDetailAdminComponent } from './manage-new/new-detail-admin/new-detail-admin.component';
import { NewAddAdminComponent } from './manage-new/new-add-admin/new-add-admin.component';

const routes: Routes = [
  { path: 'admin/product-add', component:ProductAddComponent  },
  { path: 'admin/product-manager', component:ProductManagerComponent  },
  { path: 'admin/product-manager/edit/:id', component:ProductUpdateComponent  },
  { path: 'admin/product-manager/:id', component:ManagerPDetailComponent  },
  { path: 'admin/banner', component:ManagerBannerComponent  },
  { path: 'admin/banner-add', component:BannerAddComponent  },
  { path: 'admin/banner/edit/:id', component:BannerUpdateComponent  },
  { path: 'admin/new', component:NewAdminComponent  },
  { path: 'admin/new/edit/:id', component:NewDetailAdminComponent  },
  { path: 'admin/new-add', component:NewAddAdminComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
