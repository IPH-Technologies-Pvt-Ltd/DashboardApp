import { Component, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
@Component({
  selector: 'app-pichart',
  templateUrl: './pichart.component.html', 
  styleUrls: ['./pichart.component.css'] 
})
export class PichartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [46, 73, 62, 75],
      chart: {
        height: 250,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 260,
          hollow: {
            margin: 5,
            size: "10%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false,
            },
             total: {
              show: true,
              label: "Total"
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#205d82", "#ed3b53", "#d2dde1", "#b4ecf8"],
      labels: ["", "", "", ""],
      legend: {
        show: true,
        floating: true,
        fontSize: "13px",
        position: "left",
        offsetX: 20,
        offsetY: 2,
        labels: {
          useSeriesColors: true
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      },
    
    };
  }
}
