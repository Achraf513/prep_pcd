import { SharedService } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  categories = ["Administrator","Student"]
  viewUsersOn:boolean;
  userList:Array<User>; 
  loggedIn:boolean;
  pageId:number;

  newUserEmail:string;
  newUserPassword:string;
  newUserCategory:string;

  editId:number;
  editUserEmail:string;
  editUserPassword:string;
  editUserCategory:string;

  constructor(private sharedService:SharedService) {  
    this.newUserEmail = "";
    this.newUserPassword = "";
    this.newUserCategory = "Administrator";
    
    this.loggedIn=true;
    this.pageId=3
    this.viewUsersOn=true;

    this.userList=[]
    this.userList.push(new User("lbrnze@gmail.com","azerty513","Student",0));
    this.userList.push(new User("prep@gmail.com","prep4221","Student",1));
    this.userList.push(new User("darkn@gmail.com","test1123","Teacher",2));
    this.userList.push(new User("test@gmail.com","test1123","Administrator",3));
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

  setViewUsersOn(viewUsersOn:boolean){
    this.viewUsersOn = viewUsersOn;
  }

  deleteUser(id:number){
    this.userList.splice(id,1);
    console.log(this.userList.length)
  }
  initEdit(id:number){
    this.editId = id;
    this.editUserEmail = this.userList[id].email;
    this.editUserPassword= this.userList[id].password;
    this.editUserCategory= this.userList[id].category; 
    console.log(this.editUserCategory)
  }
  updateUser(){
    this.userList[this.editId].email = this.editUserEmail;
    this.userList[this.editId].password = this.editUserPassword;
    this.userList[this.editId].category = this.editUserCategory;
  }
  addUser(){
    console.log("user added successfuly");
    this.userList.push(new User(this.newUserEmail, this.newUserPassword, this.newUserCategory,null));
    this.newUserEmail ="";
    this.newUserPassword ="";
    this.newUserCategory ="Administrator";
  } 
}

class User{
  email:string;
  password:string;
  category:string;
  userId:number; 
  constructor(email:string,password:string,category:string,userId:number){
    this.email = email;
    this.password = password;
    this.category = category; 
    this.userId=userId; 
  }
}
