import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {InquiriesClientService, Inquiry} from "../inquiries-client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit, OnDestroy {

  inquiry: Inquiry | undefined = undefined;
  subscription: Subscription | undefined = undefined;

  constructor(private route: ActivatedRoute, private inquiriesClientService: InquiriesClientService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.inquiry = this.inquiriesClientService.getInquiry(params['id']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription != undefined){
      this.subscription.unsubscribe();
    }
  }

}
