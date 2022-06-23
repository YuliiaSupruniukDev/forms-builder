import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
