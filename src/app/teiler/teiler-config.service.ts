import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

export interface ConfigVariable {
  variable: string;
  value: string;
  variableComment: string[];
}

export interface ConfigBlock {
  blockComment: string[]
  title: string;
  titleComment: string[];
  variables: ConfigVariable[];
}

@Injectable({
  providedIn: 'root'
})
export class TeilerConfigService {

  configBlocks: ConfigBlock[] = [];
  configBlocksbehaviorSubject = new BehaviorSubject(this.configBlocks);

  constructor(httpClient: HttpClient) {
    httpClient.get<ConfigBlock[]>(this.getTeilerCoreConfigUrl()).subscribe(configBlocks => {
      this.configBlocks = configBlocks;
      this.configBlocksbehaviorSubject.next(configBlocks);
    });
  }

  getTeilerCoreConfigUrl() {
    //TODO
    //return environment.config.TEILER_CORE_URL + '/config;
    return "http://localhost:8085/config";
  }

}
