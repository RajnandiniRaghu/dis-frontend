import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { MatPaginator } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers : [LibraryService]
})
export class BookComponent implements OnInit {
  userType : string = localStorage.getItem('userType');
  student : boolean;
  staff : boolean;
  faculty : boolean;
  hod : boolean;
 
   constructor() {
  }



  completionMessage: string="Error has Occurred. Try after some time!!";
  showConfirmation: boolean;
  errorMessage: string = "Error has Occurred. Try after some time!!";

   
  ngOnInit() {
    this.showConfirmation = false;
  
    this.student=false;
    this.staff=false;
    this.faculty=false;
    this.hod=false;
   

    

    
    

    if( this.userType === "student")
    {
      this.student = true;
    }
    if( this.userType === "staff"){
      this.staff = true;
    }
    if( this.userType === "head"){
      this.hod = true;
    }
    if(this.userType === "faculty")
    {
      this.faculty = true;
    }
 
  }
  
}
  
  

