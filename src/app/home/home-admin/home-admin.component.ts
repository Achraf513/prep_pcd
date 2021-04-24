import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  
  viewUsersOn:boolean;
  userList:Array<User>;
  button;
  constructor() {  
    
    this.userList=[]
    this.viewUsersOn=true;
    this.userList.push(new User("lbrnze@gmail.com","azerty513","student",0));
    this.userList.push(new User("prep@gmail.com","prep4221","student",1));
    this.userList.push(new User("darkn@gmail.com","test1123","teacher",2));
    this.userList.push(new User("test@gmail.com","test1123","administrator",3));
  }

  ngOnInit(): void {
  }



  setViewUsersOn(viewUsersOn:boolean){
    this.viewUsersOn = viewUsersOn;
  }

  deleteUser(id:number){
    this.userList[id].deleted = true;
  }
}

class User{
  email:string;
  password:string;
  category:string;
  userId:number;
  deleted:boolean;
  constructor(email:string,password:string,category:string,userId:number){
    this.email = email;
    this.password = password;
    this.category = category; 
    this.userId=userId;
    this.deleted = false;
  }
}
