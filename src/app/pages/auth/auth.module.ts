import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedMatModule,
    SharedModule,
  ],
  exports: [AuthComponent],
})
export class MainModule {}
