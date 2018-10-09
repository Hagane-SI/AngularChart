import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chart;
  dummy= [80, 72, 54, 50, 48, 27, 19, 11, 4, 3];
  data;
  ngOnInit() {
    this.drawGraph();
  }

  constructor() { }

  drawGraph(){
    this.chart = new Chart('chart', {
      type: this.getChartType(),
      data: this.chartData(),
      options: this.chartOptions()
    });
  }

  getChartType() {
    return  'line';
  }

  chartData() {
    return {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    datasets: [{
      label: 'Escaneos por Artículo',
      backgroundColor: [
            'rgba(153, 186, 217, 1)',
            'rgba(153, 202, 232, 1)',
            'rgba(200, 226, 243, 1)',
            'rgba(176, 203, 170, 1)',
            'rgba(201, 231, 181, 1)',
            'rgba(254, 231, 153, 1)',
            'rgba(249, 225, 177, 1)',
            'rgba(245, 224, 212, 1)',
            'rgba(245, 170, 165, 1)',
            'rgba(181, 181, 181, 1)'
        ],
        borderColor: [
            'rgba(153, 186, 217, 1)',
            'rgba(153, 202, 232, 1)',
            'rgba(200, 226, 243, 1)',
            'rgba(176, 203, 170, 1)',
            'rgba(201, 231, 181, 1)',
            'rgba(254, 231, 153, 1)',
            'rgba(249, 225, 177, 1)',
            'rgba(245, 224, 212, 1)',
            'rgba(245, 170, 165, 1)',
            'rgba(181, 181, 181, 1)'
        ],
        borderWidth: 1,
      data: this.dummy,
    }]
  }
  }

  chartOptions() {
    return {
      animation: { },
      scales: {
          xAxes: [{
              scaleLabel: {
              display: true,
              labelString: 'Puesto del Artículo'
              }
          }],
          yAxes: [{
              ticks: {
                  beginAtZero:true
              },
              scaleLabel: {
              display: true,
              labelString: 'Escaneos'
              }
          }]
      }
  }
  }

}
