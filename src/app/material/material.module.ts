import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";



const Material = [
                  MatInputModule,
                  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
MatToolbarModule,
MatButtonModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
