import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {InquiriesClientService, Inquiry} from "../inquiries-client.service";
import {ActivatedRoute, Router} from "@angular/router";

export interface Data{
  id: Number;
  name: string;
  suche: string;
  erhalten: string;
  found: string;
  stand: string;
}

export const  data= [
  {
    id: 1,
    name: 'Sarkome',
    suche:'',
    erhalten: '09.03.2021 08:55',
    found:'',
    stand: ''
  }
];

const  daten= [
  {
    id:1 ,
    name: '04.10.2022 10:04:49 - Reply sent to broker. Got reply 200 '
  },
  {
    id:2 ,
    name: '28.09.2022 00:30:00 - Moving inquiry to archive after 28 days '
  },
  {
    id:3 ,
    name: '27.09.2022 10:15:25 - Found 261 results. '
  },
  {
    id: 4,
    name: '27.09.2022 10:14:50 - Show raw query / Show stats'
  },
  {
    id:5 ,
    name: '27.09.2022 10:14:47 - Posted to Local Datamanagement '
  },
  {
    id: 6,
    name: '27.09.2022 00:30:00 - Moving inquiry to archive after 28 days '
  },
  {
    id: 7,
    name: '26.09.2022 11:20:37 - Found 261 results'
  },
  {
    id: 8,
    name: '26.09.2022 11:20:01 - Show raw query / Show stats'
  },
  {
    id: 9,
    name: '26.09.2022 11:19:57 - Posted to Local Datamanagement '
  },
  {
    id: 10,
    name: '26.09.2022 00:30:00 - Inquiry was archived since the result is no longer available '
  },
  {
    id: 11,
    name: '26.09.2022 00:30:00 - Inquiry was archived since the result is no longer available '
  },
  {
    id: 12,
    name: '26.09.2022 00:30:00 - Inquiry was archived since the result is no longer available '
  },
  {
    id: 13,
    name: '25.09.2022 00:30:00 - Inquiry was archived since the result is no longer available '
  }
]


@Component({
  selector: 'inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit, OnDestroy {

  inquiry: Inquiry | undefined = undefined;
  subscription: Subscription | undefined = undefined;

  dataSource = daten;
  panelOpenState = false;

  data1 = [
    {name: "0...9", value: 14},
    {name: "10...19", value: 26},
    {name: "20...29", value: 20},
    {name: "30...39", value: 25},
    {name: "40...49", value: 42},
    {name: "50...59", value: 32},
    {name: "60...69", value: 34},
    {name: "70...79", value: 49},
    {name: "80...89", value: 17},
    {name: "90...99", value: 2},
    {name: "100+", value: 0},
    {name: "Unbekannt", value: 0}

  ]
  data2 = [
    {name: "M", value: 148},
    {name: "W", value: 113}
  ]

  data: Data | undefined;

  constructor(private route: ActivatedRoute, private inquiriesClientService: InquiriesClientService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.inquiry = this.inquiriesClientService.getInquiry(params['id']);
    });

    const routeParams = this.route.snapshot.paramMap;
    const dataIdFromRoute = Number(routeParams.get('dataId'));
    this.data = data.find(data => data.id === dataIdFromRoute);

  }

  ngOnDestroy(): void {
    if (this.subscription != undefined){
      this.subscription.unsubscribe();
    }
  }

}
