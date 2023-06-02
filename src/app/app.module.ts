import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import { CenterContentComponent } from './center-content/center-content.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CenterContentComponent,
    
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    NgApexchartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
