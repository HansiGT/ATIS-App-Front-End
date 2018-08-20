import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerPopup } from "./datepicker/datepicker.component";
import { FormsModule } from '@angular/forms';
import { PredictionService } from './prediction.service';
import { CurrentUtilizationService } from './current-utilization.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { PredictionComponent } from './prediction/prediction.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CurrentUtilizationComponent } from './current-utilization/current-utilization.component';
import { LayoutEditorComponent } from './layout-editor/layout-editor.component';
import { DraggableModule } from './draggable/draggable.module';


@NgModule({
  declarations: [
    AppComponent,
    NgbdDatepickerPopup,
    MainNavComponent,
    PredictionComponent,
    OpeningHoursComponent,
    FrontPageComponent,
    CurrentUtilizationComponent,
    LayoutEditorComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    DraggableModule
  ],
  providers: [PredictionService, CurrentUtilizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
