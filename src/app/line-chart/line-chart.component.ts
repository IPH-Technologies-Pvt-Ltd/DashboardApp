import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  data: any;

  options: any;

  ngOnInit() {
  

    this.data = {
      labels: [10,20,30,40,50,60],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: "#205d82",
          
          borderWidth: 2,
          fill: false,
          pointBorderColor:'#e13a5e',
          pointRadius:'5',
          pointBackgroundColor:'#e13a5e',
          
          tension: 0.1,
          data: [100,220,180,260,220,290,430,300,280,260,200,180]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor:"#c8effd",
          data: [220,100,230,220,420,300],
          borderColor: 'white',
          borderWidth: 2
        },
      
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.7,
      plugins: {
        legend: {
          position:'none',
          labels: {
            color: "black"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#bbbbbb"
          },
          grid: {
            color: "transparent", // Set the grid line color to transparent
            borderColor: 'lightgray', // Set the border color
            borderWidth: 1, // Set the border width
            borderDash: [5, 5], // Set the borderDash property to make the grid lines dotted
          }
        },
        y: {
          ticks: {
            color: "#bbbbbb"
          },
          grid: {
            drawBorder:false,
            display:'none',
          }
        }
      }
    };
    
  }
}

