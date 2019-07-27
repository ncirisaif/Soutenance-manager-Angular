import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SignComponent} from "./sign/sign.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {EnseignantComponent} from "./enseignant/enseignant.component";
import {TestComponent} from "./test/test.component";



const routes: Routes = [
  { path: '', component: SignComponent},
  { path: 'enseignant', component: EnseignantComponent},
  { path: 'etudiant', component: EtudiantComponent},
  { path: 'test', component: TestComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignComponent ];
