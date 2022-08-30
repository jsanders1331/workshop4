import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}
  user: any[] = [];
  curr_username: string = '123';
  curr_birthdate: string = '';
  curr_age: any = null; // dn't know how to initialise number
  curr_email: string = '';

  getData() {
    let data = sessionStorage.getItem('user_data') || '{}';
    this.user = JSON.parse(data);
    console.log('User Data is: ', this.user);
    return this.user;
  }

  editData(key: string, info: string) {
    // edits user_data from the server.js / sessionStorage
    console.log('info is : ', info);
    let data: any = sessionStorage.getItem('user_data') || '{}';
    data = JSON.parse(data); // get the current data
    data[0][key] = info; // change the value
    console.log(data[0][key]);
    console.log('Data is: ', data);
    // return data to string and store in the session
    sessionStorage.setItem('user_data', JSON.stringify(data));
    this.user = data;
    //sessionStorage.setItem('user_data', JSON.stringify(data))
  }

  ngOnInit(): void {
    this.getData();
  }
}
