import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() sendIdEvent = new EventEmitter<number>();
  @Output() sendIsLogedIn = new EventEmitter<boolean>();
  pageId:number; 
  isloggedIn: boolean;
  constructor(){
    this.pageId = 2; // 2 stands for register screen
    this.isloggedIn = false;
  } 
  
  togglePageId() {
    this.pageId = 1; // 2 stands for log-in screen
    this.sendIdEvent.emit(this.pageId)
  }
  toggleIsLoggedIn() {
    this.isloggedIn = true;  
    this.sendIsLogedIn.emit(this.isloggedIn)
  }
  ngOnInit(): void {
  }

}
