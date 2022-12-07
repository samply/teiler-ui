import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DatePipe} from '@angular/common';


export interface QualityReports {
  zeitstempel: string;
  version: string;
}

const ELEMENT_DATA: QualityReports[] = [
  {zeitstempel: '2022-09-27 10:25:43', version: '002'},
  {zeitstempel: '2022-07-29 14:37:31', version: '002'},
  {zeitstempel: '2022-02-28 10:27:22', version: '002'},
  {zeitstempel: '2022-02-08 17:31:11', version: '002'},
  {zeitstempel: '2022-02-07 14:27:01', version: '002'},
  {zeitstempel: '2021-10-30 19:46:54', version: '002'},
  {zeitstempel: '2021-10-25 08:18:20', version: '002'},
  {zeitstempel: '2021-10-21 15:28:43', version: '002'},
  {zeitstempel: '2021-10-21 10:25:10', version: '002'},
  {zeitstempel: '2021-10-01 10:37:27', version: '002'},
  {zeitstempel: '2021-06-10 15:45:21', version: '002'},
  {zeitstempel: '2021-06-10 15:45:19', version: '002'},
  {zeitstempel: '2020-09-18 11:50:05', version: '002'},
  {zeitstempel: '2020-08-07 13:53:58', version: '002'},
  {zeitstempel: '2019-10-01 15:18:20', version: '002'},
  {zeitstempel: '2019-08-16 11:35:56', version: '002'},
  {zeitstempel: '2019-08-15 16:32:11', version: '002'},
  {zeitstempel: '2019-08-15 16:00:17', version: '002'},
  {zeitstempel: '2019-08-15 14:25:09', version: '002'},
  {zeitstempel: '2019-08-09 09:51:30', version: '002'},

];

@Component({
  selector: 'quality-report-app',
  templateUrl: './quality-report.component.html',
  styleUrls: ['./quality-report.component.css']
})


export class QualityReportComponent implements OnInit {

  //table
  displayedColumns: string[] = ['zeitstempel', 'version'];
  dataSource = ELEMENT_DATA;
  numberOfItemsToBeDisplayedDefault = "zero";

  //toggle
  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  //generator
  title = 'appComponent';

  //date
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // @ts-ignore
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy h:mm:ss a zzzz');
  }

}
