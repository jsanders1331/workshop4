import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'John';
  password = '123';
  fetchedData = {};

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
              sessionStorage.setItem(
                'user_data',
                JSON.stringify(this.fetchedData)
              );
              console.log('hello', this.fetchedData);
            }
          })
      );

    // https://caniuse.com/?search=fetch f*k IE users
  }
  ngOnInit(): void {}
}
