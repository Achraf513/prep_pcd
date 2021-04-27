import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared-service.service'; 

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit { 

  pageId:number; 
  loggedIn: boolean;
  email:string;
  password:string;
  category:string;
  constructor(private sharedService: SharedService){
    this.email = "";
    this.category = "";
    this.password = ""; 
    this.pageId = 1; // 1 stands for log-in screen
    this.loggedIn = false;
  } 
  
  toggleIsLoggedIn() { 
    if(this.email=="" && this.password==""){
      this.sharedService.setCategory("Teacher");
      this.pageId = 2;
      this.loggedIn = true;   
      this.sharedService.setPageId(this.pageId)
      this.sharedService.setLoggedIn(this.loggedIn)
    }
  }   

  ngOnInit() {
    this.sharedService.shared_loggedIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    this.sharedService.shared_pageId.subscribe(pageId => this.pageId = pageId);
    this.sharedService.shared_category.subscribe(category => this.category = category);
  }  
}
