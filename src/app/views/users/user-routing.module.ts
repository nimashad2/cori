import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Users'
      },
      children: [
        {
          path: 'createuser',
          component: CreateUserComponent,
          data: {
          title: 'Create User'
          }
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}