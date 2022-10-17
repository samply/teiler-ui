import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemColumn} from "./inquiries.component";


@Component({
  selector: 'failed-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class FailedInquiriesComponent extends InquiriesComponent{

  constructor() {
    super();
  }

  fetchInquiriesTableItems(): InquiriesTableItem[]{
    //TODO
    return [];
  }
  getInquiriesTableItemColumnsToDisplay(): InquiriesTableItemColumn[]{
    return [
      InquiriesTableItemColumn.NAME,
      InquiriesTableItemColumn.LOOKING_FOR,
      InquiriesTableItemColumn.RECEIVED_AT,
      InquiriesTableItemColumn.ERROR_CODE,
      InquiriesTableItemColumn.AS_OF
    ];
  };

  getTitel(): string {
    return "Fehlerhafte Suchanfragen";
  }

}
