import { Component } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root', // Tag Name
  templateUrl: './app.component.html', // Template (View)
  styleUrls: ['./app.component.css']
})

//AppComponent()
// var a = new AppComponent();
// a = AppComponent.prototype => created by JavaScript

export class AppComponent { // View Model (TS > JS Objects)
  title = 'webapp';
  
  //Type Declarations
  protected appName: string;
  protected appDescription : string;
  protected dataPoints : number[];
  protected showNotification : boolean;
  protected autoNumber : number;
  //handleClick : () => void;
  
  constructor()
  {
    this.appName = "Angular Playground";
    this.appDescription = "Sample app to learn Angular";
    this.dataPoints = [100, 200, 300];
    this.showNotification = true;
    this.autoNumber = 0;


    // Below is also valid - function will be created for every instance
    // Below is the use case if we want to declare function at constructor level
    // var id = Math.random();
    // this.handleClick = function()
    // {
    //   return id;
    // }
  }

  handleClick() //AppComponent.prototype.handleClick
  {
    this.autoNumber++;
  }
}
