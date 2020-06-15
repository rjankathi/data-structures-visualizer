import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  foods = [
    {value:1,viewValue:'Mango'},
    {value:1,viewValue:'Apple'},
    {value:1,viewValue:'Banana'}

  ]
}
