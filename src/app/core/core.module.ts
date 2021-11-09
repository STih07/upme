import { CoreState } from './state/core.state';
import { ApiModule } from './api/api.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { TuiAvatarModule, TuiTabsModule } from '@taiga-ui/kit';
import { NgxsModule } from '@ngxs/store';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TuiTabsModule,
    TuiAvatarModule,
    ApiModule.forRoot({rootUrl: 'http://185.167.97.59:8080'}),
    NgxsModule.forFeature([CoreState])
  ]
})
export class CoreModule { }
