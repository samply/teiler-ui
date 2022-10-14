import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemElement} from "./inquiries.component";


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
  getInquiriesTableItemElementToDisplay(): InquiriesTableItemElement[]{
    return [
      InquiriesTableItemElement.NAME,
      InquiriesTableItemElement.LOOKING_FOR,
      InquiriesTableItemElement.RECEIVED_AT,
      InquiriesTableItemElement.MATCHING_DATASETS,
      InquiriesTableItemElement.AS_OF
    ];
  };

}
