import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiAvatarModule, TuiBadgeModule, TuiIslandModule } from '@taiga-ui/kit';

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
    TuiButtonModule,
    TuiAvatarModule,
    TuiBadgeModule,
    TuiIslandModule,
    TuiSvgModule
  ]
})
export class UserModule { }
