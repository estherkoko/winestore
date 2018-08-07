import { Component, OnInit } from '@angular/core';
import  { HttpClient } from  '@angular/common/http';
import { WineService } from '../shared/wine.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Wine } from '../shared/wine.model';
//import { toast } from '../../../../../../../node_modules/angular2-materialize';

declare var M: any;
@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  providers :[WineService]
})
export class WineComponent implements OnInit {
  newwines: any;
  allwines :{};
  //add constructor parameter
  constructor(private wineService: WineService, private http: HttpClient ) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/wine').subscribe(data => {
      this.newwines = data;
        });
    this.refreshWineList();
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
    M.toast({html : 'Saved successfully', classes:'rounded'});
  });
}

//add array collection to the response
refreshWineList(){
  this.wineService.getWineList().subscribe((res)=>{
    this.wineService.wines=res as Wine[];
});
}
  }


