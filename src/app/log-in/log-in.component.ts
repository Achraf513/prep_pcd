import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  @Output() messageIdEvent = new EventEmitter<number>();
  pageId:number; 
  
  constructor(){
    this.pageId = 1; // 1 stands for log-in screen
  } 
 
  sendMessage() {
    this.pageId = 2; // 2 stands for register screen
    this.messageIdEvent.emit(this.pageId)
  }
  ngOnInit(): void {
  }

}
