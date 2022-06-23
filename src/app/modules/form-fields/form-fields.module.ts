import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormFieldsComponent } from './components/form-fields/form-fields.component';



@NgModule({
  declarations: [FormFieldsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule
  ],
  exports: [FormFieldsComponent]
})
export class FormFieldsModule { }
