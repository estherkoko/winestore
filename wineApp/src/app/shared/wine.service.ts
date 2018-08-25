import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import {NgxPaginationModule} from 'ngx-pagination';


import { Wine } from './wine.model';
//import { Options } from '../../../node_modules/@types/selenium-webdriver/ie';

@Injectable()
export class WineService {
//create two variables in the service class
  //selectedWine of type wine class
  //selectedWine: Wine;
  selectedWine: any = {};

  //array of wines as wines
  wines: Wine[];

  //initialized uri for the wine controller 
  readonly baseURL = 'https://winesfiftyfive.herokuapp.com/wine';
  //inject HTTP client inside the constructor
  constructor(public http :HttpClient) { }

  //post request for http client object
  postWine(myWine : Wine){
      return this.http.post(this.baseURL, myWine)
  }

  //function to get data from db
  getWineList(){
    return this.http.get(this.baseURL);
   // console.log('hewll'+ this.http.get(this.baseURL));
    //.map((response:Response)=>response.json());
   // return this.http.get(${this.baseURL});
   // console.log(this.http.get(this.baseURL));
  }
  //function to update db based on id
  putWine(myWine:Wine){
    return this.http.put(this.baseURL + `/${myWine._id}`, myWine);
  }

  //delete from db using id - using delete route usage
 deleteWine(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

    //function to update db based on id
  
}
