import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SignInDialogComponent, RegisterDialogComponent],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatInputModule,
  ],
})
export class AuthModule {}
