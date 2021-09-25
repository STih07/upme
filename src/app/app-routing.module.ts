import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'startup', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'startup', loadChildren: () => import('./features/startup/startup.module').then(m => m.StartupModule) },
  { path: 'app', component: LayoutComponent, children: [
      { path: '', pathMatch: 'full', loadChildren: () => import('./features/personal/personal.module').then(m => m.PersonalModule) },
      { path: 'utils', loadChildren: () => import('./features/utils/utils.module').then(m => m.UtilsModule) },
      { path: 'streams', loadChildren: () => import('./features/streams/streams.module').then(m => m.StreamsModule) },
      { path: 'users', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
