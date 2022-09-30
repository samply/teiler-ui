import {Component, Input, OnInit} from '@angular/core';
import {EmptyTeilerApp, TeilerApp} from "../teiler/teiler-app";

@Component({
  selector: 'teiler-box',
  templateUrl: './teiler-box.component.html',
  styleUrls: ['./teiler-box.component.css']
})
export class TeilerBoxComponent implements OnInit {

  @Input() teilerApp: TeilerApp = new EmptyTeilerApp();

  constructor() { }

  ngOnInit(): void {
  }

}
