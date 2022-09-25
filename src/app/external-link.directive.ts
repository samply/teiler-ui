import {Directive, Input} from '@angular/core';
import {RouterLinkWithHref} from "@angular/router";

@Directive({
  selector: '[externalLink]'
})
export class ExternalLinkDirective {

  @Input() externalLink: string = '';

  constructor(private routerLinkWithHref: RouterLinkWithHref) {
    routerLinkWithHref.onClick = () => {window.location.href=this.externalLink; return false;};
  }

}
