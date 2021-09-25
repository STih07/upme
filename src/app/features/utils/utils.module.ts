import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsComponent } from './components/utils/utils.component';
import { RouterModule, Routes } from '@angular/router';
import { TuiActionModule, TuiBadgeModule, TuiCheckboxLabeledModule, TuiInputCopyModule, TuiInputModule } from '@taiga-ui/kit';
import { LinkGenerationComponent } from './components/link-generation/link-generation.component';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectionsComponent } from './components/directions/directions.component';

const routes: Routes = [
  { path: '', component: UtilsComponent },
  { path: 'link-generation', component: LinkGenerationComponent },
  { path: 'directions', component: DirectionsComponent }
];

@NgModule({
  declarations: [
    UtilsComponent,
    LinkGenerationComponent,
    DirectionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiActionModule,
    TuiLinkModule,
    TuiCheckboxLabeledModule,
    TuiButtonModule,
    TuiInputCopyModule,
    ReactiveFormsModule,
    TuiBadgeModule,
    TuiSvgModule,
    TuiInputModule
  ]
})
export class UtilsModule { }
