import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PichartComponent } from './pichart/pichart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadialBarComponent } from './radial-bar/radial-bar.component';
import { ProgressComponent } from './progress/progress.component';
import { LineComponent } from './line/line.component'; // Import NgApexchartsModule
import { ChartModule } from 'primeng/chart';
import { Piechart2Component } from './piechart2/piechart2.component';
import { BulletComponent } from './bullet/bullet.component';
import { ColumnComponent } from './column/column.component';
import { DottedLineComponent } from './dotted-line/dotted-line.component';
import { Radial2Component } from './radial2/radial2.component';
import { DistributedColumnsComponent } from './distributed-columns/distributed-columns.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DrawerComponent } from './drawer/drawer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PichartComponent,
    LineChartComponent,
    BarChartComponent,
    RadialBarComponent,
    ProgressComponent,
    LineComponent,
    Piechart2Component,
    BulletComponent,
    ColumnComponent,
    DottedLineComponent,
    Radial2Component,
    DistributedColumnsComponent,
    PolarChartComponent,
    CheckboxComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
