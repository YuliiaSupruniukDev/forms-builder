import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { StylingModule } from 'src/app/modules/styling/styling.module';
import { FormBuilderModule } from 'src/app/modules/form-builder/form-builder.module';
import { FormFieldsModule } from 'src/app/modules/form-fields/form-fields.module';
import { HeaderModule } from 'src/app/modules/header/header.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainRoutingModule } from './main-routing.module';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    SharedMatModule,
    StylingModule,
    FormBuilderModule,
    FormFieldsModule,
    HeaderModule,
    DragDropModule,
    SharedModule
  ],
  exports: [MainComponent],
})
export class MainModule {}
