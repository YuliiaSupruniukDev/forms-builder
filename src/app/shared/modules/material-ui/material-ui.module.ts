import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule],
})
export class MaterialUIModule {}
