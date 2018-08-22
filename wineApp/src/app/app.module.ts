import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { WineComponent } from './wine/wine.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
//import { Ng2PaginationModule } from 'ng2-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    //Ng2PaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
