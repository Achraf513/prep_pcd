import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private loggedIn = new BehaviorSubject(false);
  shared_loggedIn = this.loggedIn.asObservable();

  private pageId = new BehaviorSubject(1);
  shared_pageId = this.pageId.asObservable();

  private category = new BehaviorSubject("");
  shared_category = this.category.asObservable();

  constructor() { 

  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn.next(loggedIn)
  }

  setPageId(pageId: number) {
    this.pageId.next(pageId)
  }
  
  setCategory(category: string) {
    this.category.next(category)
  }
}


export class Subject {
  constructor(public id: number = null, public title: string = null, public desc: string = null,
    public ponctuation: number = null, public grammer: number = null,
    public spelling: number = null, public semantics: number = null) { }
}


export class Submission {
  constructor(public id: number = null, public subjectId:number =null, 
    public studentId:number =null, public student: string = null, 
    public answer: string = null, public ponctuationGrade: number = null, 
    public grammerGrade: number = null, public spellingGrade: number = null, 
    public semanticsGrade: number = null, public totalGrade:number =null,
    public dateOfSubmission:string =null) { }
}