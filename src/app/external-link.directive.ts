import {Directive, Input} from '@angular/core';
import {RouterLinkWithHref} from "@angular/router";

@Directive({
  selector: '[externalLink]'
})
export class ExternalLinkDirective {

  @Input() externalLink: string = '';

  constructor(private routerLinkWithHref: RouterLinkWithHref) {
    routerLinkWithHref.onClick = () => {
      if (this.externalLink != null && this.externalLink != undefined && this.externalLink.length > 0){
        window.location.href=this.externalLink;
        return false;
      }
      return true;
    };
  }

}
