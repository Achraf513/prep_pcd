import { SharedService } from './../shared-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  category:string;
  pageId:number; 
  isloggedIn: boolean;
  constructor(private sharedService:SharedService){ 
    this.pageId = 2; 
    this.isloggedIn = true;
  }  
  ngOnInit(): void { 
    this.sharedService.shared_category.subscribe(category => this.category = category);
  }

}
