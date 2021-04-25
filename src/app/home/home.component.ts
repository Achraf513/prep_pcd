import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  pageId:number; 
  isloggedIn: boolean;
  constructor(){
    this.pageId = 2; 
    this.isloggedIn = true;
  }  
  ngOnInit(): void {
  }

}
