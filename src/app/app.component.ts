import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chartTest';
  chart;
  ngOnInit() {
    this.drawGraph();
  }

  drawGraph(){
    this.chart = new Chart('chart', {
      type: this.getChartType(),
      data: this.chartData(),
      options: this.chartOptions()
    });
  }

  getChartType() {
    return  'bar';
  }

  chartData() {
    return {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
      data: [80, 72, 54, 50, 48, 27, 19, 11, 4, 3],
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
