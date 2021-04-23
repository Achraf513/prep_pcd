import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() messageIdEvent = new EventEmitter<number>();

  pageId:number; 
  
  constructor(){
    this.pageId = 2; // 2 stands for register screen
  } 
  
  sendMessage() {
    this.pageId = 1; // 2 stands for log-in screen
    this.messageIdEvent.emit(this.pageId)
  }
  ngOnInit(): void {
  }

}
