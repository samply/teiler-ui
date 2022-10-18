import {Component, OnInit} from '@angular/core';
import {InquiriesService} from "../../teiler/inquiries.service";
import {Inquiry} from "./inquiries-client.service";
import {EmbeddedTeilerApps} from "../../teiler/teiler-app";
import {createRouterLinkForBase} from "../../route/route-utils";
import {Router} from "@angular/router";

export enum InquiriesTableItemColumn {
  NAME = 'Name',
  LOOKING_FOR = 'Looking for',
  RECEIVED_AT = 'Received at',
  ARCHIVED_AT = 'Archived at',
  MATCHING_DATASETS = 'Matching datasets',
  AS_OF = 'As of',
  ERROR_CODE = 'Error Code'
}

@Component({
  selector: 'inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export abstract class InquiriesComponent implements OnInit {

  inquiriesTableItemColumn: typeof InquiriesTableItemColumn = InquiriesTableItemColumn;

  constructor(private inquiriesService: InquiriesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  abstract getInquiriesTableItemColumnsToDisplay(): InquiriesTableItemColumn[];

  abstract getTitel(): string;

  fetchInquiriesTableItems(): Inquiry[] {
    return this.inquiriesService.fetchInquiries();
  }

  private columnGetterMap = new Map<InquiriesTableItemColumn, (item: Inquiry) => string | undefined>([
    [InquiriesTableItemColumn.NAME, item => item.name],
    [InquiriesTableItemColumn.LOOKING_FOR, item => item.lookingFor],
    [InquiriesTableItemColumn.RECEIVED_AT, item => item.receivedAt],
    [InquiriesTableItemColumn.ARCHIVED_AT, item => item.archivedAt],
    [InquiriesTableItemColumn.MATCHING_DATASETS, item => item.matchingDatasets],
    [InquiriesTableItemColumn.AS_OF, item => item.asOf],
    [InquiriesTableItemColumn.ERROR_CODE, item => item.errorCode]
  ])

  getInquiriesTableItemColumn(item: Inquiry, column: InquiriesTableItemColumn): string | undefined {
    // @ts-ignore
    let getter: (item: InquiriesTableItem) => string = this.columnGetterMap.get(column);
    return getter(item);
  }

  getRouterLink(inquiry: Inquiry): string {
    return '/' + createRouterLinkForBase(this.router, EmbeddedTeilerApps.INQUIRY + '/' + inquiry.inquiryId);
  }

}
