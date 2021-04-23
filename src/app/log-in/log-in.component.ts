import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  @Output() sendIdEvent = new EventEmitter<number>();
  @Output() sendIsLogedIn = new EventEmitter<boolean>();

  pageId:number; 
  isloggedIn: boolean;
  email:string;
  password:string;

  constructor(){
    this.pageId = 1; // 1 stands for log-in screen
    this.isloggedIn = false;
  } 
 
  togglePageId() {
    this.pageId = 2; // 2 stands for register screen
    this.sendIdEvent.emit(this.pageId)
  }
  toggleIsLoggedIn() {
    console.log(this.email);
    console.log(this.password);
    if(this.email=="achraf.affes@supcom.tn" && this.password=="azerty513"){
      this.pageId = 3;
      this.isloggedIn = true;  
      this.sendIsLogedIn.emit(this.isloggedIn);
      this.sendIdEvent.emit(this.pageId);
    }
  }
  ngOnInit(): void {
  } 
  getEmail(val){
    this.email = val;
  }
  getPassword(val){
    this.password = val;
  }

  

}
