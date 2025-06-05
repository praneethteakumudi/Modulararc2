import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main-navbar', pathMatch: 'full' },

  {
    path: 'main-navbar',
    loadChildren: () =>
      import('./mainmodule').then((m) => m.MainmoduleModule)
  },

  {
    path: 'navbar1',
    loadChildren: () =>
      import('./mainmodule/navbar1/navbar1.module').then((m) => m.Navbar1Module)
  },
  {
    path: 'navbar2',
    loadChildren: () =>
      import('./mainmodule/navbar2/navbar2.module').then((m) => m.Navbar2Module)
  },
  {
    path: 'navbar3',
    loadChildren: () =>
      import('./mainmodule/navbar3/navbar3.module').then((m) => m.Navbar3Module)
  },

  { path: '**', redirectTo: 'main-navbar' }  // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
