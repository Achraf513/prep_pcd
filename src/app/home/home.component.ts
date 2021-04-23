import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() sendIdEvent = new EventEmitter<number>();
  @Output() sendIsLogedIn = new EventEmitter<boolean>();

  pageId:number; 
  isloggedIn: boolean;
  constructor(){
    this.pageId = 3; // 2 stands for register screen
    this.isloggedIn = true;
  } 
  
  togglePageId() {
    this.pageId = 1; // 2 stands for log-in screen
    this.sendIdEvent.emit(this.pageId)
  }
  toggleIsLoggedIn() {
    this.isloggedIn = false;  
    this.sendIsLogedIn.emit(this.isloggedIn)
  }
  ngOnInit(): void {
  }

}
