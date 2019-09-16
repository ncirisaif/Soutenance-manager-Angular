import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';




import { AppComponent } from './app.component';
import { SignService } from './sign.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnseignantComponent } from './enseignant/enseignant.component';
import {MatSelectModule} from '@angular/material/select';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EnseignantComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
