import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    DragDropModule,
    SharedModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
