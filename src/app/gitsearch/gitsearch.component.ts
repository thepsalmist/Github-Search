import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.user = this._githubService.getUserProfile();
  }

}
