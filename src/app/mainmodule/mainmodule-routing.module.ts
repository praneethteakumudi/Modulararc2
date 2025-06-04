import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'navbar3', loadChildren: () => import('./navbar3/navbar3.module').then(m => m.Navbar3Module) },
  { path: '', redirectTo: '/navbar3/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/navbar3/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
