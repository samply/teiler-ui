import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {boxes} from '../boxes';
import {DatePipe} from '@angular/common';
import {data} from "./inhalttests";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'function-tests-app',
  templateUrl: './function-tests.component.html',
  styleUrls: ['./function-tests.component.css']
})
export class FunctionTestsComponent implements OnInit {
//inhalt
  data = data;

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

  boxes: { inf: string; inf2: string; icon_source: string; inf1: string; name: string; icon: string; id: number } | { inf: string; inf2: string; inf1: string; name: string; icon: string; id: number } | { inf: string; inf2: string; inf1: string; inf4: string; inf3: string; inf5: string; name: string; icon: string; id: number } | { inf: string; inf1: string; name: string; icon: string; id: number } | { inf: string; inf2: string; inf1: string; inf3: string; name: string; icon: string; id: number } | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const boxesIdFromRoute = Number(routeParams.get('boxesId'));
    this.boxes = boxes.find(boxes => boxes.id === boxesIdFromRoute);


    // @ts-ignore
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy h:mm:ss a zzzz');

  }

}
