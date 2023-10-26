import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   const optionsProgress1 = {
  chart: {
    height: 60,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      colors: {
        backgroundBarColors: ['#f1f1f1'],
      }
    },
  },
  series: [
    {
      name: '',
      data: [44],
    },
  ],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Process 1',
    style: {
      color: 'white',
    },
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 5,
    text: '44%',
    style: {
      fontSize: '15px',
      color: '#205d82',
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ['Process 1'],
  },
  yaxis: {
    max: 100,
  },
  fill: {
    opacity: 1,
  },
  annotations: {
    points: [
      {
        x: 0,
        y: 0,
        borderColor: '#f1f1f1', // Background color
        borderWidth: 10, // Adjust this for border radius
      },
    ],
  },
};


    // Options for Progress Bar 2
    const optionsProgress2 = {
      chart: {
        height: 60,
        type: 'bar',
        stacked: true,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          colors: {
            backgroundBarColors: ['#f1f1f1']
          }
        }
      },
      colors: ['#17ead9'],
      stroke: {
        width: 0
      },
      series: [
        {
          name: 'Process 2',
          data: [80]
        }
      ],
      title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: 'Process 2',
        style:{
          color:'white'
        }
      },
      subtitle: {
        floating: true,
        align: 'right',
        offsetY: 0,
        text: '80%',
        style: {
          fontSize: '15px',
          color:'#205d82'
        }
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: ['Process 2']
      },
      yaxis: {
        max: 100
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          gradientToColors: ['#6078ea']
        }
      }
    };

    // Options for Progress Bar 3
    const optionsProgress3 = {
      chart: {
        height: 60,
        type: 'bar',
        stacked: true,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          colors: {
            backgroundBarColors: ['#f1f1f1']
          }
        }
      },
      colors: ['#f02fc2'],
      stroke: {
        width: 0
      },
      series: [
        {
          name: 'Process 3',
          data: [74]
        }
      ],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#6094ea']
        }
      },
      title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: 'Process 3',
        style:{
          color:'white'
        }
      },
      subtitle: {
        floating: true,
        align: 'right',
        offsetY: 0,
        text: '74%',
        style: {
          fontSize: '15px',
          color:'#205d82'
        }
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: ['Process 3']
      },
      yaxis: {
        max: 100
      }
    };

    // Initialize Progress Bar 1
    const chartProgress1 = new ApexCharts(
      document.querySelector('#progress1'),
      optionsProgress1
    );
    chartProgress1.render();

    // Initialize Progress Bar 2
    const chartProgress2 = new ApexCharts(
      document.querySelector('#progress2'),
      optionsProgress2
    );
    chartProgress2.render();

    // Initialize Progress Bar 3
    const chartProgress3 = new ApexCharts(
      document.querySelector('#progress3'),
      optionsProgress3
    );
    chartProgress3.render();

    // Simulate updates to progress bars at intervals
    setInterval(() => {
      const p1Data = this.getRangeRandom({ min: 10, max: 100 });
      chartProgress1.updateOptions({
        series: [
          {
            data: [p1Data],
            borderRadius:20
          }
        ],
        subtitle: {
          text: p1Data + '%'
        }
      });

      const p2Data = this.getRangeRandom({ min: 10, max: 100 });
      chartProgress2.updateOptions({
        series: [
          {
            data: [p2Data]
          }
        ],
        subtitle: {
          text: p2Data + '%'
        }
      });

      const p3Data = this.getRangeRandom({ min: 10, max: 100 });
      chartProgress3.updateOptions({
        series: [
          {
            data: [p3Data]
          }
        ],
        subtitle: {
          text: p3Data + '%'
        }
      });
    }, 3000);
  }

  getRangeRandom(yrange: { min: number; max: number }): number {
    return Math.floor(
      Math.random() * (yrange.max - yrange.min + 1) + yrange.min
    );
  }
}
