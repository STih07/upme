import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

const routes: Routes = [
  { path: ':id', component: UserComponent }
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiLinkModule,
    TuiButtonModule
  ]
})
export class UserModule { }
