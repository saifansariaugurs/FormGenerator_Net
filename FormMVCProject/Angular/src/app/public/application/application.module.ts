import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ListApplicationComponent } from './list-application/list-application.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ListApplicationComponent, CreateApplicationComponent, EditApplicationComponent],
  imports: [
    CommonModule,
    FormsModule   ,
    ReactiveFormsModule ,
    ApplicationRoutingModule,
      TranslateModule
  
  ]
})
export class ApplicationModule { }
