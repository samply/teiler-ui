import { Component, OnInit } from '@angular/core';

export interface UploadsTable {
  uploadid: number;
  startedat: string;
  startedfrom: string;
  status: string;
}

const ELEMENT_DATA: UploadsTable[] = [
  {uploadid: 684, startedat: '27.05.2022 16:07:05', startedfrom: 'admin', status: 'US_CANCELED'},
  {uploadid: 685, startedat: '30.05.2022 16:28:13', startedfrom: 'admin', status: 'US_COMPLETED'},
]

@Component({
  selector: 'uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  displayedColumns: string[] = ['uploadid', 'startedat', 'startedfrom', 'status'];
  dataSource = ELEMENT_DATA;

  title = 'Uploads';
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
