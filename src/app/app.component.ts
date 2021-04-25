import { SharedService } from './shared-service.service'; 
import { Component } from '@angular/core'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  pageId:number;  
  loggedIn:boolean;

  constructor(private sharedService: SharedService){
    this.pageId = 1;
    this.loggedIn = false;
  }  

  ngOnInit() {
    this.sharedService.shared_loggedIn.subscribe(loggedIn => this.loggedIn = loggedIn)
    this.sharedService.shared_pageId.subscribe(pageId => this.pageId = pageId)
  }
}

