import {Component, OnInit} from '@angular/core';

export enum InquiriesTableItemColumn {
  NAME = 'Name',
  LOOKING_FOR = 'Looking for',
  RECEIVED_AT = 'Received at',
  ARCHIVED_AT = 'Archived at',
  MATCHING_DATASETS = 'Matching datasets',
  AS_OF = 'As of',
  ERROR_CODE = 'Error Code'
}

export interface InquiriesTableItem {
  inquiryId: number;
  name: string;
  lookingFor: string;
  receivedAt: string;
  archivedAt?: string;
  matchingDatasets?: string;
  asOf?: string;
  errorCode?: string;
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
  abstract getInquiriesTableItemColumnsToDisplay(): InquiriesTableItemColumn[];
  abstract getTitel(): string;

  inquiriesTableItemColumn: typeof InquiriesTableItemColumn = InquiriesTableItemColumn;


  private columnGetterMap = new Map<InquiriesTableItemColumn, (item: InquiriesTableItem) => string | undefined>([
    [InquiriesTableItemColumn.NAME, item => item.name],
    [InquiriesTableItemColumn.LOOKING_FOR, item => item.lookingFor],
    [InquiriesTableItemColumn.RECEIVED_AT, item => item.receivedAt],
    [InquiriesTableItemColumn.ARCHIVED_AT, item => item.archivedAt],
    [InquiriesTableItemColumn.MATCHING_DATASETS, item => item.matchingDatasets],
    [InquiriesTableItemColumn.AS_OF, item => item.asOf],
    [InquiriesTableItemColumn.ERROR_CODE, item => item.errorCode]
  ])

  getInquiriesTableItemColumn(item: InquiriesTableItem, column: InquiriesTableItemColumn): string | undefined {
    // @ts-ignore
    let getter: (item: InquiriesTableItem) => string = this.columnGetterMap.get(column);
    return getter(item);
  }

}
