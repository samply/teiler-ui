import {Component, OnInit} from '@angular/core';

export enum InquiriesTableItemElement {
  NAME = 'Name',
  LOOKING_FOR = 'Looking for',
  RECEIVED_AT = 'Received at',
  ARCHIVED_AT = 'Archived at',
  MATCHING_DATASETS = 'Matching datasets',
  AS_OF = 'As of',
  ERROR_CODE = 'Error Code'
}


const elementFunctionMap = new Map<InquiriesTableItemElement, (item: InquiriesTableItem) => string>([
  [InquiriesTableItemElement.NAME, item => item.name],
  [InquiriesTableItemElement.LOOKING_FOR, item => item.lookingFor],
  [InquiriesTableItemElement.RECEIVED_AT, item => item.receivedAt],
  [InquiriesTableItemElement.ARCHIVED_AT, item => item.archivedAt],
  [InquiriesTableItemElement.MATCHING_DATASETS, item => item.matchingDatasets],
  [InquiriesTableItemElement.AS_OF, item => item.asOf],
  [InquiriesTableItemElement.ERROR_CODE, item => item.errorCode]
])

export function getElementOfInquiriesTableItem(item: InquiriesTableItem, element: InquiriesTableItemElement): string {
  // @ts-ignore
  let getElement: (item: InquiriesTableItem) => string = this.elementFunctionMap.get(element);
  return getElement(item);
}


export interface InquiriesTableItem {
  inquiryId: string;
  name: string;
  lookingFor: string;
  receivedAt: string;
  archivedAt: string;
  matchingDatasets: string;
  asOf: string;
  errorCode: string;
}

@Component({
  selector: 'inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export abstract class InquiriesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  abstract fetchInquiriesTableItems(): InquiriesTableItem[];
  abstract getInquiriesTableItemElementToDisplay(): InquiriesTableItemElement[];

}
