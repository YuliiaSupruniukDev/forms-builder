import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormFieldsComponent } from './components/form-fields/form-fields.component';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';

@NgModule({
  declarations: [FormFieldsComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    DragDropModule,
  ],
  exports: [FormFieldsComponent]
})
export class FormFieldsModule { }
