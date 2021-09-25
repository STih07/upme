import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';


const routes: Routes = [
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiLinkModule,
    TuiButtonModule
  ]
})
export class LoginModule { }
