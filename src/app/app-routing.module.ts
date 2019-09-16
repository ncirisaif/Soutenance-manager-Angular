import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



const routes: Routes = [

  { path: 'user',
    loadChildren: './user/user.module#UserModule'},
  { path: '**', component: PageNotFoundComponent}




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ PageNotFoundComponent];
