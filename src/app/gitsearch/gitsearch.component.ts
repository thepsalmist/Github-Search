import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: Object;
  repos: any
  username: string;

  constructor(private http: HttpClient, private _githubService: GithubService) { }

  newUserProfile() {
    this._githubService.newProfile(this.username);
  }

  ngOnInit() {
    this.http.get(environment.apiUrl).subscribe(data => {
      this.user = data
      console.log(data);
      console.log('working here!')
    })
    this._githubService.getUserRepo().subscribe(repos => {
      this.repos = repos;
      console.log(repos)
      console.log("repos on a roll")
    })

  }

}
