import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { TuiAvatarModule, TuiInputDateModule, TuiInputModule, TuiInputPasswordModule, TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiNotificationModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

const routes: Routes = [
  { path: '', component: PersonalComponent }
];


@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiAvatarModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputPhoneModule,
    TuiInputDateModule,
    TuiInputPasswordModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiButtonModule
  ]
})
export class PersonalModule { }
