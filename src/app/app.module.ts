import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { HomeTeacherComponent } from './home/home-teacher/home-teacher.component';
import { HomeStudentComponent } from './home/home-student/home-student.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    HomeAdminComponent,
    HomeTeacherComponent,
    HomeStudentComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
