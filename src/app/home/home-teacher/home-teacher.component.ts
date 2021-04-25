import { SharedService } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {
  loggedIn:boolean;
  pageId:number;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.shared_loggedIn.subscribe(loggedIn => this.loggedIn = loggedIn)
    this.sharedService.shared_pageId.subscribe(pageId => this.pageId = pageId)
  }

  signOut(){
    this.pageId = 1;
    this.loggedIn = false;   
    this.sharedService.setPageId(this.pageId)
    this.sharedService.setLoggedIn(this.loggedIn)
  }
}
