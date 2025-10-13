import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
declare var echarts: any;

@Component({
  selector: 'app-line-chart',
  template: `<div #chart style="width:100%;height:100%;min-height:180px;"></div>`
})
export class LineChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('chart') chartEl: ElementRef;
  @Input() data: any; // expected { labels: string[], values: number[] }
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
    const labels = (this.data && this.data.labels) ? this.data.labels : (() => { const x=[]; for (let i=0;i<30;i++) x.push(`D${i+1}`); return x; })();
    const values = (this.data && this.data.values) ? this.data.values : labels.map(()=> Math.round(200 + Math.random()*800));
    const option = {
      tooltip: {},
      xAxis: { type:'category', data: labels },
      yAxis: {},
      series: [{ type:'line', data: values }]
    };
    this.chart.setOption(option, true);
  }

  resize = () => this.chart && this.chart.resize();
  ngOnDestroy(){ window.removeEventListener('resize', this.resize); this.chart && this.chart.dispose(); }
}
