import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'app/content.service';
import { series } from 'app/data';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexAnnotations,
  ApexGrid,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | undefined | any;
  annotations?: ApexAnnotations | undefined;
  chart?: ApexChart | undefined;
  xaxis?: ApexXAxis | undefined;
  dataLabels?: ApexDataLabels | undefined;
  grid?: ApexGrid | undefined;
  labels?: string[] | undefined | any;
  stroke?: ApexStroke | undefined;
  title?: ApexTitleSubtitle | undefined;
  responsive: ApexResponsive[];
};
// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
 
// };


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  content: any;
  @ViewChild('chart')
  chart!: SidenavComponent;
  public chartOptions: Partial<ChartOptions> | any;
   @ViewChild("chart1") chart1!: ChartComponent;
  public chartOptions1?: Partial<ChartOptions>;

  ngOnInit() {
    this.contentService.getContent().subscribe((response: any) => {
      console.log(response)
      this.content = response;
    });
  }


  constructor(private contentService: ContentService) {
    this.chartOptions = {
      series: [
        {
          name: 'image_url',
          data: series.monthDataSeries1.prices,
        },
        {
          name: 'secondary_heading',
          data: series.monthDataSeries2.prices,
        },
      ],
      chart: {
        type: 'line',
        width: '100%'
      },
      annotations: {
        points: [
          {
            x: new Date('14 Nov 2017').getTime(),
            y: 8900,
            marker: {
              size: 2,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
            },
            label: {
              text: 'Data feature',
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        // width: 1,
      },
      grid: {
        padding: {
          right: 30,
          left: 20,
        },
      },
      title: {
        text: 'Notification anomalies',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
    };
    this.chartOptions1 = {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart1: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  public generateData(
    baseval: number,
    count: number,
    yrange: { max: number; min: number }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;


  }
}
