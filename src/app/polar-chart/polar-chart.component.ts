
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit{
    data: any;
    options: any;
    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            datasets: [
                {
                    data: [7, 8, 5, 6],
                    backgroundColor: [
                      '#25698d', '#6bd4fa','#d2d6d5','#ea3c5c'
                    ],
                    label: 'My dataset'
                }
            ],
        };
        
        this.options = {
          maintainAspectRatio: false,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: ''
                    }
                }
            }
        };
    }
}