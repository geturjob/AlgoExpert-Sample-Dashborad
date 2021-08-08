import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllEngineerComponent } from './all-engineer/all-engineer.component';
import { MatCardModule } from '@angular/material/card';
import { DsalgotopicComponent } from './dsalgotopic/dsalgotopic.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SystemdashComponent } from './systemdash/systemdash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeatureListComponent,
    AllCompaniesComponent,
    AllEngineerComponent,
    DsalgotopicComponent,
    LanguagesComponent,
    WorkspaceComponent,
    SystemdashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
