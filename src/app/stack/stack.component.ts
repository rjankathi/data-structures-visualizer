import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DSStack } from './stack';
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
  animations: [

    trigger('listAnimation', [

      transition('* => *', [

        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translate(-75px)', offset: 0}),
            style({ opacity: .5, transform: 'translate(35)', offset: 0.3}),
            style({ opacity: 1, transform: 'translate(0)', offset: 1}),
          ]))
        ]), {optional: true }),

        query(':leave', stagger('300ms', [
          animate('1s ease-out', keyframes([
            style({ opacity: 1, transform: 'translate(0)', offset: 0}),
            style({ opacity: .5, transform: 'translate(35)', offset: 0.3}),
            style({ opacity: 0, transform: 'translate(-75px)', offset: 1}),
          ]))
        ]), {optional: true }),


      ])

    ]),
  ]
})
export class StackComponent implements OnInit {
  stack = [];
  initStackSize = 5;
  constructor() { }
  stackCls = new DSStack();
  stackInput:any
  @ViewChildren('blockText') blockText:any;

  ngOnInit() {
    this.createStackSize(5);

  }
  
  createStackSize(value){
    this.stack = Array.apply('x', Array(+value));
    this.initStackSize = value;
  }
  push() {
    debugger;
     console.log(this.stack);
    const blockText = document.getElementsByClassName('blocktext')[0];
     this.stackInput = document.getElementById('stack-input');
    const item1 = document.getElementsByClassName('item1')[0];
    const stackDiv = document.getElementById('stackdiv');

    stackDiv.style.display = "block";
    stackDiv.classList.remove('stack-selector'); // reset animation
    void stackDiv.offsetWidth; // trigger reflow

    stackDiv.classList.add('stack-selector');// start animation

    //this.stack.unshift(stackInput.value);
    for(var i=0; i< this.stack.length ; i++){
        console.log(this.stack[i]);
    }
    this.stack = this.stackCls.stackData;
    setTimeout(function () {
      stackDiv.style.display = "none";
    }, 6200);

    //get blocktext ref

    blockText.textContent = this.stackInput.value;
    setTimeout(this.setStackValue, 4000,this.stackCls,this.stackInput);
    //this.stackInput.value = "";
    //set item1 value 
    // setTimeout(function () {
    //   //item1.textContent = stackInput.value;
    //   console.log(this.stack);
    //   //this.stack = this.stack.unshift(stackInput.value);
    //   this.stackCls.push(this.stackInput.value);
    //   this.stackInput.value = "";
    // }, 6000);



  }
  setStackValue(stack,input){
    stack.push(input.value);
    this.stackInput
  }
  
  pop(){
    debugger;
  
    this.stack.pop()//shift();
    //return this.stackCls.pop();
  }

}