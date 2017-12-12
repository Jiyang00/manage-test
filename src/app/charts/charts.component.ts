import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  showLabel = true;
  chartLabels: string[] = ['已支出：22万元', '已计划：12万元', '未计划：92万元'];
  colors = ['#488AFF', '#F5A623', '#A9B6CD'];
  options = {
    tooltips: {
      enabled: false
    },
    layout: {
      padding: {
        left: 0,
        right: 100,
        top: 0,
        bottom: 0
      }
    },
    cutoutPercentage: 70 // 内圆宽度
  }
  chartType = 'doughnut';
  datasets = [{
    data: [22, 12, 90],
    backgroundColor: ['#488AFF', '#F5A623', '#A9B6CD'],
    borderColor: ['#488AFF', '#F5A623', '#A9B6CD'],
  }];
  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {

  }

}
