import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignComponent} from "./sign/sign.component";
import {RoleSelectorComponent} from "./role-selector/role-selector.component";
import {UserComponent} from "./user.component";
import {ProfileComponent} from "./profile/profile.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  { path: '', component: UserComponent,
    children: [
      { path: 'login', component: SignComponent},
      { path: 'test', component: TestComponent ,
        children: [
          { path: 'profile', component: ProfileComponent},
        ]},
      { path: 'roleselector', component: RoleSelectorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
