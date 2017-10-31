import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
