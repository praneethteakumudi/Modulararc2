import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';


const routes: Routes = [
    {
        path: '',
    component: MainNavbarComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule {}
