import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";


interface Options {
  value: string;
  viewValue: string;
}

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

  //stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
//select1
  op1: Options[] = [
    {value: 'Testlauf', viewValue: 'xx'},
    {value: 'Upload', viewValue: 'Upload'},
  ];
  //select2
  op2: Options[] = [
    {value: 'komplett', viewValue: 'komplett'},
    {value: 'inkrementell', viewValue: 'inkrementell'},
  ];
  //select3
  op3: Options[] = [
    {value: 'DKTK: Ja', viewValue: 'DKTK: Ja'},
    {value: 'DKTK: Nein', viewValue: 'DKTK: Nein'},
  ];
  optionControl = new FormControl(this.op1[1].value);
  option2Control = new FormControl(this.op2[1].value);
  option3Control = new FormControl(this.op3[1].value);
  form = new FormGroup({
    option: this.optionControl,
    option2: this.option2Control,
    option3: this.option3Control,
  });
//table
  displayedColumns: string[] = ['uploadid', 'startedat', 'startedfrom', 'status'];
  dataSource = ELEMENT_DATA;

  title = 'Uploads';
  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {}
    openDialog(): void {
      const dialogRef = this.dialog.open(UploadDialogComponent, {});

      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
}
