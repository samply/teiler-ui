import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from '@angular/common';
import {MatDialog} from "@angular/material/dialog";
import {DialogTestsComponent} from "../pop-ups/dialog-tests/dialog-tests.component";
import {data, Data } from '../pop-ups/dialog-tests/testinhalt1'
import {Subscription} from "rxjs";
@Component({
  selector: 'function-tests-app',
  templateUrl: './function-tests.component.html',
  styleUrls: ['./function-tests.component.css']
})
export class FunctionTestsComponent implements OnInit {
  //date
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  //Panel state
  panelOpenState = false;
  togglePanel() {
    this.panelOpenState = !this.panelOpenState
  }
  //generator
  title = 'appComponent';

  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  //info button
  isShowInfo= false;
  isShowInfo1= false;
  isShowInfo2= false;
  isShowInfo3= false;
  isShowInfo4= false;
  isShowInfo5= false;
  isShowInfo6= false;
  isShowInfo7= false;


  toggleData() {
    this.isShowInfo = !this.isShowInfo;
    this.isShowInfo1 = !this.isShowInfo1;
    this.isShowInfo2 = !this.isShowInfo2;
    this.isShowInfo3 = !this.isShowInfo3;
    this.isShowInfo4 = !this.isShowInfo4;
    this.isShowInfo5 = !this.isShowInfo5;
    this.isShowInfo6 = !this.isShowInfo6;
    this.isShowInfo7 = !this.isShowInfo7;

  }

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy h:mm:ss a zzzz');

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTestsComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
