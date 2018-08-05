import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Wine } from './wine.model';

@Injectable()
export class WineService {
//create two variables in the service class
  //selectedWine of type wine class
  selectedWine: Wine;
  //array of wines as wines
  wines: Wine[];

  //initialized uri for the wine controller 
  readonly baseURL = 'http://localhost:3000/wines';
  //inject HTTP client inside the constructor
  constructor(private http :HttpClient) { }

  //post request for http client object
  postWine(myWine : Wine){
      return this.http.post(this.baseURL, myWine)
  }

}
