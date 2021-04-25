import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private loggedIn = new BehaviorSubject(false);
  shared_loggedIn = this.loggedIn.asObservable();

  private pageId = new BehaviorSubject(1);
  shared_pageId = this.pageId.asObservable();

  constructor() { 

  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn.next(loggedIn)
  }

  setPageId(pageId: number) {
    this.pageId.next(pageId)
  }
  
}