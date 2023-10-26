import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dotted-line',
  templateUrl: './dotted-line.component.html',
  styleUrls: ['./dotted-line.component.css']
})
export class DottedLineComponent implements OnInit{
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: [0,10,20,30,40,50,60,70,80],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [10, 66, 55, 88, 53, 98, 42, 88, 60],
                  fill: false,
                  borderColor: '#ed3b54',
                  borderDash:[5,5],
              },
              {
                  label: 'Second Dataset',
                  data: [38, 54, 20, 75, 47, 60, 25, 60, 30],
                  fill: false,
                  borderColor: '#65d6f4',
                  borderDash:[5,5],
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 1.3,
          plugins: {
            legend: {
            position: 'none',
           
            labels: {
            color: 'gray',
            },
            },
            },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
