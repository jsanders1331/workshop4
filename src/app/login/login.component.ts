import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'John1';
  password = '123';
  fetchedData = {};
  authenticated = false;

  constructor(private router: Router, private route: ActivatedRoute) {}
  loggedIn() {
    if (sessionStorage.getItem('user_data') == null) {
      return false;
    }
    console.log(sessionStorage.getItem('user_data'));
    var data = sessionStorage.getItem('user_data') || '{}';
    var data_JSON = JSON.parse(data);
    return data_JSON[0].valid;
  }

  cardClasses() {
    return {
      hidemessage: this.authenticated,
      showmessage: !this.authenticated,
    };
  }

  submit() {
    fetch('http://localhost:3000/api/auth', {
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
      method: 'POST',
      headers: { 'content-type': 'application/json' }, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    }) // fetch
      .then((response) =>
        response
          .json()
          .then((data) => (this.fetchedData = data))
          .then((data) => {
            if (data[0].valid) {
              console.log('Authenticated');
              this.authenticated = true;
              sessionStorage.setItem(
                'user_data',
                JSON.stringify(this.fetchedData)
              );
              console.log('hello', this.fetchedData);
              this.loggedIn();
              this.router.navigate(['/profile']);
              return true;
            } else {
              this.authenticated = false;
              return false;
            }
          })
      );

    // https://caniuse.com/?search=fetch f*k IE users
  }

  ngOnInit(): void {}
}
