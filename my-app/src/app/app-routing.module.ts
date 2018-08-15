import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionComponent } from './prediction/prediction.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'front-page',
    component: FrontPageComponent
  },
  {
    path: 'prediction',
    component: PredictionComponent
  },
  {
    path: 'opening-hours',
    component: OpeningHoursComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}