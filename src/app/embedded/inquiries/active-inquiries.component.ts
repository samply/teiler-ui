import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemColumn} from "./inquiries.component";


@Component({
  selector: 'active-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class ActiveInquiriesComponent extends InquiriesComponent{

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
      InquiriesTableItemColumn.MATCHING_DATASETS,
      InquiriesTableItemColumn.AS_OF
    ];
  };

  getTitel(): string {
    return "Active Suchanfragen";
  }

}
