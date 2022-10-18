import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItemColumn} from "./inquiries.component";
import {ActiveInquiriesService} from "../../teiler/active-inquiries.service";
import {Router} from "@angular/router";


@Component({
  selector: 'active-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class ActiveInquiriesComponent extends InquiriesComponent{

  constructor(activeInquiriesService: ActiveInquiriesService, router: Router) {
    super(activeInquiriesService, router);
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
