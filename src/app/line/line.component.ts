import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit{
  data: any;

  options: any;
 
  ngOnInit() {
  this.data = {
  labels: [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'august',
  'March',
  'April',
  'May',
  'June',
  'July',
  'august',
  ],
  datasets: [
  {
  label: 'Loremp',
  data: [10, 14, 10, 8, 21, 18, 31, 11, 0,14, 10, 8, 21, 18],
  fill: true,
  borderColor: '#aadfed',
  backgroundColor: 'rgba(188,236,250, 0.5)',
  pointRadius: 0,
  borderDash:[5,5],
  },
 
  {
  label: 'Ipsum',
  data: [18, 23, 13, 8, 12, 9, 3, 10, 23, 21, 0, 8, 12, 9, 3, 10, 23, 21],
  fill: true,
  borderColor: '#aadfed',
  backgroundColor: 'rgba(188,236,250, 0.5)',
  pointRadius: 0,
  borderDash:[5,5],
  },
  ],
  };
  this.options = {
  maintainAspectRatio: false,
  aspectRatio: 2.32,
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
  display: false,
  },
  grid: {
  display: false,
  },
  },
  y: {
  ticks: {
  display: false,
  },
  grid: {
    display: false,
    },
  },
  },
  };
  }
 }

