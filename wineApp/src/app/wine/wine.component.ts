import { Component, OnInit } from '@angular/core';

import { WineService } from '../shared/wine.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  providers :[WineService]
})
export class WineComponent implements OnInit {

  //add constructor parameter
  constructor(private wineService: WineService) {}

  ngOnInit() {
    this.resetForm();
  }

  //function for the reset button


    resetForm(form?: NgForm){
      
      if(form){
        form.reset();
        this.wineService.selectedWine={
          _id : "",
          name: "",
          description : "",
          typeOfWine : "",
          size : null,
          price : null

        }
       
      }
     
    }
 //submit form to enter data into the database
 onSubmit(form:NgForm){
  this.wineService.postWine(form.value).subscribe((res)=>{
    this.resetForm(form);
    _M.toast({html : 'Saved successfully', classes:'rounded'});
  });
}
  }


