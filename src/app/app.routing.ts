import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CaveComponent } from './cave/cave.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'cave',
    component: CaveComponent
  }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
