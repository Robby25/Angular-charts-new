import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LineChartComponent}from'./line-chart/line-chart.component'
import{BarChartComponent}from'./bar-chart/bar-chart.component'
import{PieChartComponent}from'./pie-chart/pie-chart.component'
import{DoughnutChartComponent}from'./doughnut-chart/doughnut-chart.component'
import{RadarChartComponent}from'./radar-chart/radar-chart.component'
import{BubbleChartComponent}from'./bubble-chart/bubble-chart.component'

const routes: Routes = [
  {path:'line-charts',component:LineChartComponent},
  {path:'pie-charts',component:PieChartComponent},
  {path:'bubble-charts',component:BubbleChartComponent},
  {path:'bar-charts',component:BarChartComponent},
  {path:'doughnut-charts',component:DoughnutChartComponent},
  {path:'radar-charts',component:RadarChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
