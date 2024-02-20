import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule  } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DatePipe } from '@angular/common';

const appRoutes : Routes = [

];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    
   
  

  ],
  exports : MATERIAL_MODULES,
  providers: [DatePipe  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
