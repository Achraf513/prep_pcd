import { SharedService } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {
  loggedIn:boolean;
  pageId:number;
  currentId:number;
  subjectList:Array<Subject>;
  submitted:boolean;
  constructor(private sharedService:SharedService) {  
    this.loggedIn = true;
    this.pageId = 4;
    this.currentId = 0;
    this.subjectList = [];

    //all data should be retrieved from the database using the subject and student id with a WHERE
    //Query applied to the submissions Table
    //PS : the Boolean saying submitted will be equal to : false if length of fetched data = 0
    //else it will be set to true, a student can have multiple submissions, u decide whether 
    //to keep them all or the best graded one.
    this.subjectList.push(new Subject("Always leaves a trail of stardust. The girl's a freak, she drive a jeep in Laguna Beach. Fine, fresh, fierce, we got it on lock. All my girls vintage Chanel baby.Before you met me I was alright but things were kinda heavy. Peach-pink lips, yeah, everybody stares. This is no big deal. Calling out my name. I could have rewrite your addiction. She's got that, je ne sais quoi, you know it. Heavy is the head that wears the crown. 'Cause, baby, you're a firework. Like thunder gonna shake the ground.Just own the night like the 4th of July! I’m gon’ put her in a coma. What you're waiting for, it's time for you to show it off. Can't replace you with a million rings. You open my eyes and I'm ready to go, lead me into the light. And here you are. I’m gon’ put her in a coma. Come on, let your colours burst. So cover your eyes, I have a surprise. As I march alone to a different beat. Glitter all over the room pink flamingos in the pool.","lbronez",true,0));
    this.subjectList.push(new Subject("description lprep","lprep",false,1));
    this.subjectList.push(new Subject("description drkn","drkn",false,2));
    this.submitted = this.subjectList[0].submitted;
  }
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
  clicked(id:number){
    this.currentId = id;
    this.submitted = this.subjectList[id].submitted; 
  }
}


//this class should be removed, and replaced with the one existing in sharedService
class Subject{
  descr:string;
  title:string;
  submitted:boolean;
  id:number;
  constructor(descr:string,title:string,submitted:boolean,id:number){
    this.descr = descr;
    this.title = title;
    this.submitted = submitted;
    this.id = id;
  }
}
