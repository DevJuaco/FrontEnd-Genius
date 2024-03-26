import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'administration', 
    loadChildren: () => import('./modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  { 
    path: 'pos', 
    loadChildren: () => import('./modules/pos/pos.module').then(m => m.PosModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
