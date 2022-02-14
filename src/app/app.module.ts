import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes,RouterModule}from"@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LineChartComponent}from'./line-chart/line-chart.component'
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import {NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BubbleChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    LineChartComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'line-charts', component: LineChartComponent},
      {path: 'bar-charts', component: BarChartComponent},
      {path: 'bubble-charts', component: BubbleChartComponent},
      {path: 'radar-charts', component: RadarChartComponent},
      {path: 'doughnut-charts', component: DoughnutChartComponent},
      {path: 'pie-charts', component: PieChartComponent},
    ]),
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
