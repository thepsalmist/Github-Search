import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/thepsalmist').subscribe(data => {
      this.user = data;
      console.log(data);
      console.log("stiletos on mastard")
    })

  }

}
