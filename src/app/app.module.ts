import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { MasterComponent } from './master/master.component';
// import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [ AppComponent, MasterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    //{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule, FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ]
})
export class AppModule { }
