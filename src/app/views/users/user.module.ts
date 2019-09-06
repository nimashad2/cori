import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
    imports: [
      FormsModule
    ],
    declarations: [CreateUserComponent]
  })
  export class UsersModule { }