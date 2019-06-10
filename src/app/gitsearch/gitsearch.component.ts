import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any;
  repos: any
  username: string;

  constructor(private http: HttpClient, private _githubService: GithubService) { }

  newUserProfile() {
    this._githubService.newProfile(this.username);

    this.http.get('https://api.github.com/users/' + this.username).subscribe(data => {
      this.user = data
      console.log(data);
      console.log('working here!')
    })
    this.http.get('https://api.github.com/users/' + this.username + '/repos').subscribe(repos => {
      this.repos = repos;
      console.log(repos)
      console.log("repos on a roll")
    })

  }

  ngOnInit() { }

}
