import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';



const Material = [
                  MatInputModule

              ];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
