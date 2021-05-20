import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showGalleryValue = new EventEmitter<boolean>();
  userNameToDisplay: string;
  public validUserFlag: boolean = false;
  usersDB = [ { 'userid': 'abc@media.com', 'password': 'abc123', username: 'Tom'}, 
              {'userid' : 'def@media.com', 'password': 'def123', username: 'Dick'}
           ];
  
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(localStorage!=null){
      localStorage.getItem("UserId");
      localStorage.getItem("Password");
      if(localStorage.getItem("UserId").length > 0) {
        this.loginFromLocalStorage(localStorage.getItem("UserId"), localStorage.getItem("Password"));
      }
    }
  }

  loginForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl(''),
  });

  public loginFromLocalStorage(userId: string, password: string)
  {
    this.validateUser(userId, password);
  }
  public onLogin() {
    var userId = this.loginForm.get('userId').value;
    var password = this.loginForm.get('password').value;
    this.validateUser(userId, password);
    }

  public validateUser(userId, password) {
    this.usersDB.forEach(element => {
      if(element.userid.localeCompare(userId) === 0 && element.password.localeCompare(password) === 0) {
        this.userNameToDisplay = element.username; 
        this.showGallery(true)
        this.validUserFlag = true;

        localStorage.setItem("UserId", element.userid);
        localStorage.setItem("Password", element.password);
      }
    });
    if(!this.validUserFlag) {
      alert("Invalid User");
    }
  }
  public showGallery(value: boolean) {
    this.showGalleryValue.emit(value);
  }

  public logOut()
  {
    this.showGallery(false);
    this.validUserFlag = false;

    localStorage.removeItem("UserId");
    localStorage.removeItem("Password");
  }
}
