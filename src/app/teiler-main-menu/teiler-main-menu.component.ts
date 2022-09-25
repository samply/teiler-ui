import {Component, OnInit} from '@angular/core';
import {TeilerService} from "../teiler/teiler.service";


@Component({
  selector: 'teiler-main-menu',
  templateUrl: './teiler-main-menu.component.html',
  styleUrls: ['./teiler-main-menu.component.css']
})
export class TeilerMainMenuComponent implements OnInit {



  constructor(public teilerService: TeilerService) {  }

  ngOnInit(): void {
  }


}
