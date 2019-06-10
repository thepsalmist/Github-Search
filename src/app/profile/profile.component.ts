import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  repos: any = [];

  constructor(private http: HttpClient, private _githubService: GithubService) { }

  ngOnInit() {
    this.http.get("https://api.github.com/users/thepsalmist?access_token=" + "08cde142ae5594b2de84ebb863a8a9fba96d4a7a").subscribe(data => {
      this.user = data;
      console.log(data);
      console.log("stiletos on mastard")
    })
    this._githubService.getUserRepo().subscribe(repos => {
      this.repos = repos;
      console.log(repos)
      console.log("repos on a roll")
    })
  }

}
