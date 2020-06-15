import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  
 @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() { 
  }  

  ngOnInit(){}

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    const sidenav = document.getElementsByClassName("open-sidenav")[0]
    sidenav.setAttribute('style','opacity:0');
    //document.getElementsByClassName("open-sidenav")
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    const sidenav = document.getElementsByClassName("open-sidenav")[0]
    sidenav.setAttribute('style','opacity:0.6');
}

}