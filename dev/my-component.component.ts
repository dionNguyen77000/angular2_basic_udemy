import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template:`
    Hi, I 'm {{name}} and this is so <span [class.is-awesome]= "inputElement.value ==='yes'">awesome</span>
    <br>
    <br>
    It it awesome?
    <input type="text" #inputElement (keyup)="0">
    `,
  styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent{
  name = 'Dion';
}
