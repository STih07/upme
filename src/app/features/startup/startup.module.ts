import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupComponent } from './components/startup/startup.component';
import { FormComponent } from './components/form/form.component';
import { UserDataStepComponent } from './components/form/components/user-data-step/user-data-step.component';
import { PasswordStepComponent } from './components/form/components/password-step/password-step.component';
import { StudyStepComponent } from './components/form/components/study-step/study-step.component';
import { MotivationStepComponent } from './components/form/components/motivation-step/motivation-step.component';
import { LogoStepComponent } from './components/form/components/logo-step/logo-step.component';
import { LastStepComponent } from './components/form/components/last-step/last-step.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiStepperModule,
  TuiTextAreaModule
} from '@taiga-ui/kit';

export const routes: Routes = [
  { path: '', component: StartupComponent },
  { path: 'go', component: FormComponent }
];

@NgModule({
  declarations: [
    StartupComponent,
    FormComponent,
    UserDataStepComponent,
    PasswordStepComponent,
    StudyStepComponent,
    MotivationStepComponent,
    LogoStepComponent,
    LastStepComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiStepperModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    TuiInputDateModule,
    TuiInputPhoneModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiTextAreaModule
  ]
})
export class StartupModule { }
