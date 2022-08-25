import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  userName = ""
  password = ""
  userlist = [{"userName": "123", "password": "123"}]
  constructor(private router:Router) { }

  check(){
    let found = this.userlist.some(e=>(e.userName == this.userName && e.password == this.password));
    if(found){
      alert("valid")
      this.router.navigate(['/','account'])
    } else{
      alert("invalid user")
    }
  }
  ngOnInit(): void {
  }

}
