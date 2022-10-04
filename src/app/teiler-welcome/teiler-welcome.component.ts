import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

class TeilerAdmin {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;


  constructor() {
    //TODO
    //this.name = environment.config.TEILER_ADMIN_NAME;
    //this.email = environment.config.TEILER_ADMIN_EMAIL;
    //this.phone = environment.config.TEILER_ADMIN_PHONE;
    this.name = "Max Mustermann";
    this.email = "max.mustermann@teiler-example.com";
    this.phone = "+49 123 456789";
  }
}

@Component({
  selector: 'teiler-welcome',
  templateUrl: './teiler-welcome.component.html',
  styleUrls: ['./teiler-welcome.component.css']
})
export class TeilerWelcomeComponent implements OnInit {

  teilerAdmin: TeilerAdmin = new TeilerAdmin();
  //TODO
  //welcomeTitle: string = "Welcome to your " + environment.config.TEILER_PROJECT + "Bridgehead";
  welcomeTitle: string = "Welcome to your DKTK Bridgehead";
  welcomeMessage: string = `
  You are on the entry page of the Bridgehead on site DKTK Brückenkopf.
  The Bridgehead is used to convert a site's data into a DKTK-compatible format and make it usable for the other components.
  Although it is DKTK software, it is under local sovereignty, i.e. it runs under DKTK Brückenkopf.
  Further information on the Bridgehead concept can be found in the concepts of the DKTK working group CCP-IT, which you can find at <a href="https: //ccp-it.dktk.dkfz.de/">https: //ccp-it.dktk.dkfz.de/</a> and download for free.<br><br>
  This page shows which software components your Bridgehead consists of. Left-clicking on an entry will take you to the corresponding component.
  You can also see the availability and version of each component.<br><br>
  If you have any questions, please contact your local bridgehead administrator:
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
