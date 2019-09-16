import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {SignComponent} from "./sign/sign.component";
import {RoleSelectorComponent} from "./role-selector/role-selector.component";
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import {TestComponent} from "./test/test.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    SignComponent,
    RoleSelectorComponent,
    ProfileComponent,
    UserComponent,
    TestComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule,


  ]
})
export class UserModule { }
