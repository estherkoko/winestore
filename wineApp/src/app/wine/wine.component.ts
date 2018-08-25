import { Component, OnInit } from '@angular/core';
import  { HttpClient } from  '@angular/common/http';
import { WineService } from '../shared/wine.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Wine } from '../shared/wine.model';
import { FilterPipe} from '../filter.pipe';

//import { toast } from '../../../../../../../node_modules/angular2-materialize';

declare var M: any;
@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  providers :[WineService]
})
export class WineComponent implements OnInit {
  //newwines: any;
 p:number = 1;
 searchText :any;
  //add constructor parameter
  constructor(public wineService: WineService, private http: HttpClient ) {}

  ngOnInit() {
    /*this.http.get('http://localhost:3000/wine').subscribe(data => {
      this.newwines = data;
        });*/
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
   if(form.value._id==""){
  this.wineService.postWine(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshWineList();
    M.toast({html : 'Saved successfully', classes:'rounded'});
  });
}
//update the data for the current id
else{
  this.wineService.putWine(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshWineList();
    M.toast({html : 'Updated successfully', classes:'rounded'});
  });
}
}

//add array collection to the response
refreshWineList(){
  this.wineService.getWineList().subscribe((res)=>{
    this.wineService.wines=res as Wine[];
});
}

//function to allow edit of data and update the db
onEdit(w: Wine){
  this.wineService.selectedWine=w;
}
//function that returns an observer 
onDelete(_id: string, form: NgForm){
  if(confirm('Are you sure you want to delete this wine?')==true){
    this.wineService.deleteWine(_id).subscribe((res) =>
    {
      this.refreshWineList();
      this.resetForm(form);
      M.toast({html : 'Deleted successfully', classes:'rounded'});
    });
  }
}


}


