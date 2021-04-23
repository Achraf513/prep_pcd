import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{ 
  private _pageId:number;  
  constructor(){
    this._pageId = 1;
  } 

  receiveMessage($event) {
    this._pageId = $event
  }
  get pageId(){ return this._pageId;}
  set pageId(id:number){this._pageId = id;}   
}

