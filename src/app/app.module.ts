import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- added
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { TpsGraphComponent } from './tps/tps-graph/tps-graph.component';
import { TpsTableComponent } from './tps/tps-table/tps-table.component';
import { ServerResponseComponent } from './server-response/server-response.component';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { TpsTableChildComponent } from './tables/tps-table-child/tps-table-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ScatterChartComponent,
    BarChartComponent,
    LineChartComponent,
    TpsGraphComponent,
    TpsTableComponent,
    ServerResponseComponent,
    TpsTableChildComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
