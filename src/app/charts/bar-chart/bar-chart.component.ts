import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
declare var echarts: any;

@Component({
  selector: 'app-bar-chart',
  template: `<div #chart style="width:100%;height:100%;min-height:180px;"></div>`
})
export class BarChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('chart') chartEl: ElementRef;
  @Input() data: any; // expected { categories: string[], values: number[] }
  chart: any;

  ngAfterViewInit() {
    this.chart = echarts.init(this.chartEl.nativeElement);
    this.render();
    window.addEventListener('resize', this.resize);
  }

  ngOnChanges(ch: SimpleChanges) {
    if (ch.data && this.chart) this.render();
  }

  render() {
    const categories = (this.data && this.data.categories) ? this.data.categories : ['A','B','C','D','E'];
    const values = (this.data && this.data.values) ? this.data.values : categories.map(()=> Math.round(Math.random()*1000));
    const option = {
      tooltip: {},
      xAxis: { type:'category', data: categories },
      yAxis: {},
      series: [{ type:'bar', data: values }]
    };
    this.chart.setOption(option, true);
  }

  resize = () => this.chart && this.chart.resize();
  ngOnDestroy(){ window.removeEventListener('resize', this.resize); this.chart && this.chart.dispose(); }
}
