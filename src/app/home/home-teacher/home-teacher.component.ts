import { SharedService, Subject, Submission } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {
  loggedIn: boolean;
  pageId: number;
  addSubjectOn: boolean;
  subjectList: Array<Subject>;
  submissionList: Array<Submission>;

  grammerGrade: number;
  ponctuationGrade: number;
  semanticsGrade: number;
  spellingGrade: number;
  titlePicked: string;
  descPicked: string;

  sumIsWrong:boolean;
  emptyField:boolean;
  alertClosed:boolean;

  currentId: number;
  constructor(private sharedService: SharedService) {

    this.ponctuationGrade = 0;
    this.semanticsGrade = 0;
    this.grammerGrade = 0;
    this.spellingGrade = 0;
    this.titlePicked = "";
    this.descPicked = "";
    this.alertClosed = true;

    this.currentId = 0;
    this.addSubjectOn = true;
    this.subjectList = [];
    this.submissionList = [];
    
    this.subjectList.push(new Subject(1, "NLP", "Natural language processing", 5, 5, 5, 5));
    this.subjectList.push(new Subject(2, "pyqt", "a python graphical user interface framework", 5, 5, 5, 5));
    
    this.submissionList.push(new Submission(2,2,2, "Achraf Affes", "a python graphical user interface framework", 5, 5, 4, 5,18.5,"2021-05-12"));
    this.submissionList.push(new Submission(2,2,2, "Med Amin ben kraiem", "a python I am setting the customId in ngOnInit(). And i am passing the data for index  I am setting the customId in ngOnInit(). And i am passing the data for index  I am setting the customId in ngOnInit(). And i am passing the data for index  I am setting the customId in ngOnInit(). And i am passing the data for index  I am setting the customId in ngOnInit(). And i am passing the data for index natural language processing graphical user interface framework", 5, 5, 5, 5,20,"2021-04-29"));
  }

  ngOnInit(): void {
    this.sharedService.shared_loggedIn.subscribe(loggedIn => this.loggedIn = loggedIn)
    this.sharedService.shared_pageId.subscribe(pageId => this.pageId = pageId)
  }

  signOut() {
    this.pageId = 1;
    this.loggedIn = false;
    this.sharedService.setPageId(this.pageId)
    this.sharedService.setLoggedIn(this.loggedIn)
  }

  subjectClicked(id: number) {
    this.currentId = id;
  }
  AddSubject(){
    if(this.grammerGrade+this.ponctuationGrade+this.spellingGrade+this.semanticsGrade==20
      && this.titlePicked!="" &&this.descPicked!=""){
        this.subjectList.push(new Subject(4,this.titlePicked,this.descPicked,
          this.ponctuationGrade,this.grammerGrade,this.spellingGrade,this.semanticsGrade));
      this.titlePicked="";
      this.descPicked="";
      this.ponctuationGrade=0;
      this.semanticsGrade=0;
      this.grammerGrade=0;
      this.spellingGrade=0;
      this.sumIsWrong=false;
      this.emptyField=false;
      this.alertClosed=false;
    }else if(this.grammerGrade+this.ponctuationGrade+this.spellingGrade+this.semanticsGrade!=20){
      this.sumIsWrong=true;
      this.alertClosed=false;
    }else{
      this.emptyField=true;
      this.alertClosed=false; 
    }
  }
  closeAlert(){
    this.alertClosed = true;
  }
  /* fetchData(){
    if feteched result = null;
    this.subjectList.push(new Subject(0,"Select a subject","please add more subjects first"));
  } */
}
