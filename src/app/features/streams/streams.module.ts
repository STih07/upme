import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from './components/streams/streams.component';
import { TuiAvatarModule, TuiBadgeModule, TuiCheckboxModule, TuiPaginationModule } from '@taiga-ui/kit';
import { RouterModule, Routes } from '@angular/router';
import { StreamUsersComponent } from './components/stream-users/stream-users.component';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';

const routes: Routes = [
  { path: '', component: StreamsComponent },
  { path: ':id', component: StreamUsersComponent }
];

@NgModule({
  declarations: [
    StreamsComponent,
    StreamUsersComponent
  ],
  imports: [
    CommonModule,
    TuiCheckboxModule,
    RouterModule.forChild(routes),
    TuiBadgeModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiPaginationModule,
    TuiLinkModule,
    TuiAvatarModule
  ]
})
export class StreamsModule { }
