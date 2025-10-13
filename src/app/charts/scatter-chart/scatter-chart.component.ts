import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from '../../../assets/echarts.js';

@Component({
  selector: 'app-scatter-chart',
  template: `<div #chartContainer class="chart-card fade-slide" style="height: 300px;"></div>`,
  styles: []
})
export class ScatterChartComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() xData: string[] = [];
  @Input() yData: number[] = [];

  chart: any;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initChart();
    window.addEventListener('resize', () => {
      if (this.chart) this.chart.resize();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && (changes.xData || changes.yData)) {
      this.updateChart();
    }
  }

  initChart() {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.updateChart();
  }

  updateChart() {
    const isDark = document.body.classList.contains('dark');

    const data = this.xData.map((x, i) => [x, this.yData[i] || 0]);

    const options = {
      backgroundColor: isDark ? '#0f1720' : '#ffffff',
      textStyle: { color: isDark ? '#e6eef8' : '#222' },
      xAxis: {
        type: 'category',
        data: this.xData,
        axisLabel: { interval: 30, rotate: 45 },
        axisLine: { lineStyle: { color: isDark ? '#9fb0cc' : '#666' } }
      },
      yAxis: {
        type: 'value',
        name: 'Transactions',
        axisLine: { lineStyle: { color: isDark ? '#9fb0cc' : '#666' } },
        axisLabel: { color: isDark ? '#e6eef8' : '#222' }
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => `${params.data[0]} : ${params.data[1]} transactions`,
        textStyle: { color: isDark ? '#e6eef8' : '#222' }
      },
      series: [
        {
          type: 'scatter',
          data: data,
          symbolSize: 8,
          itemStyle: { color: 'dodgerblue' }
        }
      ],
      grid: { left: '10%', right: '5%', bottom: '15%', top: '10%' }
    };

    this.chart.setOption(options);
  }
}
