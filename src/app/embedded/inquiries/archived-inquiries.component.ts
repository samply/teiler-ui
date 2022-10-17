import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemColumn} from "./inquiries.component";

const ELEMENT_DATA: InquiriesTableItem[] = [
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '17.09.2020 15:20', archivedAt:''},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '18.02.2021 10:01', archivedAt:''},
  {inquiryId: 2, name: 'No way', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '24.02.2021 15:31', archivedAt:''},
  {inquiryId: 3, name: 'Test Dennis', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '03.03.2021 08:46', archivedAt:''},
  {inquiryId: 3, name: 'Test Dennis 2', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '03.03.2021 08:49', archivedAt:''},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '12.03.2021 12:11', archivedAt:''},
  {inquiryId: 4, name: 'Schnelltest', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '12.04.2021 10:41', archivedAt:''},
  {inquiryId: 4, name: 'Schnelltest', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '12.04.2021 10:53', archivedAt:''},
  {inquiryId: 5, name: 'Geschlecht = W', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '31.08.2021 16:58', archivedAt:''},
  {inquiryId: 6, name: 'test c4 fhir', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '29.12.2021 11:44', archivedAt:''},
  {inquiryId: 6, name: 'test c4 fhir', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '26.01.2022 13:48', archivedAt:''},
  {inquiryId: 7, name: 'Test-tobias-20220527', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '27.05.2022 13:36', archivedAt:''},
  {inquiryId: 8, name: 'Sarkome', lookingFor: 'Patients Biomaterial Clinical data	09.03.2021 08:55', receivedAt: '28.09.2022 00:30', archivedAt:''},
  {inquiryId: 9, name: 'asdfasdf', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '10.08.2022 11:33', archivedAt: '08.09.2022 00:30'},
  {inquiryId: 10, name: 'test6.7.2022', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '06.07.2022 16:39', archivedAt: '04.08.2022 00:30'},
  {inquiryId: 11, name: 'Erste Suchanfrage', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '30.03.2022 15:05', archivedAt: '28.04.2022 00:30'},
  {inquiryId: 12, name: 'FHIR Test #?', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '22.03.2022 11:01', archivedAt: '20.04.2022 00:30'},
  {inquiryId: 13, name: 'Test15.03.2022', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '15.03.2022 15:07', archivedAt: '13.04.2022 00:30'},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '07.02.2022 15:11', archivedAt: '08.03.2022 00:30'},
  {inquiryId: 14, name: 'test 20220110', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '10.01.2022 11:29', archivedAt: '09.02.2022 00:30'},
  {inquiryId: 15, name: 'test querry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '05.01.2022 13:52', archivedAt: '03.02.2022 00:30'},
  {inquiryId: 16, name: 'All Patients', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '11.03.2021 17:36', archivedAt: '26.10.2021 00:30'},
  {inquiryId: 17, name: 'Geschlecht M', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '09.07.2021 09:53', archivedAt: '07.08.2021 00:30'},
  {inquiryId: 18, name: 'Test#2', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '30.06.2021 10:28', archivedAt: '29.07.2021 00:30'},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '30.06.2021 10:29', archivedAt: '29.07.2021 00:30'},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '28.06.2021 10:57', archivedAt: '27.07.2021 00:30'},
  {inquiryId: 19, name: 'Test 123', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '21.05.2021 10:36', archivedAt: '19.06.2021 00:30'},
  {inquiryId: 20, name: 'local broker test', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '06.04.2021 10:30', archivedAt: '05.05.2021 00:30'},
  {inquiryId: 21, name: 'test-20200806', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '06.08.2020 15:33', archivedAt: '18.02.2021 09:59'},
  {inquiryId: 22, name: 'Test Biomaterialmaterial 8.9.2020', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '08.09.2020 13:33', archivedAt: '07.01.2021 00:30'},
  {inquiryId: 23, name: 'Test-Mohamed-20201023', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '23.10.2020 14:46', archivedAt: '21.11.2020 00:30'},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '06.08.2020 15:30', archivedAt: '04.09.2020 00:30'},
  {inquiryId: 1, name: 'Unnamed inquiry', lookingFor: 'Patients Biomaterial Clinical data', receivedAt: '06.08.2020 15:30', archivedAt: '04.09.2020 00:30'}
]


@Component({
  selector: 'archived-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class ArchivedInquiriesComponent extends InquiriesComponent{

  constructor() {
    super();
  }

  fetchInquiriesTableItems(): InquiriesTableItem[]{
    //TODO
    return ELEMENT_DATA;
  }
  getInquiriesTableItemColumnsToDisplay(): InquiriesTableItemColumn[]{
    return [
      InquiriesTableItemColumn.NAME,
      InquiriesTableItemColumn.LOOKING_FOR,
      InquiriesTableItemColumn.RECEIVED_AT,
      InquiriesTableItemColumn.ARCHIVED_AT
    ];
  };

  getTitel(): string {
    return "Archivierte Suchanfragen";
  }


}
