import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ModalWindowComponent } from 'src/app/shared/components/modal-window/modal-window.component';
import { NgModule } from '@angular/core';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [FormBuilderComponent, ModalWindowComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    SharedModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
