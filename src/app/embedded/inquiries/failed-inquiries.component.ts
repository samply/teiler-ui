import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemElement} from "./inquiries.component";


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
  getInquiriesTableItemElementToDisplay(): InquiriesTableItemElement[]{
    return [
      InquiriesTableItemElement.NAME,
      InquiriesTableItemElement.LOOKING_FOR,
      InquiriesTableItemElement.RECEIVED_AT,
      InquiriesTableItemElement.ERROR_CODE,
      InquiriesTableItemElement.AS_OF
    ];
  };

}
