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
  private _loggedIn:boolean;

  constructor(){
    this._pageId = 1;
    this._loggedIn = false;
  } 

  recievePageId($event: number) {
    this._pageId = $event
  }
  recieveIsLoggedIn($event: boolean) {
    this._loggedIn = $event
  }
  get pageId(){ return this._pageId;}
  set pageId(id:number){this._pageId = id;}   

  get loggedIn(){ return this._loggedIn;}
  set loggedIn(isloggedIn:boolean){this._loggedIn = isloggedIn;}   
}

