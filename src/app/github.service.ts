import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repository: any;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '', '')
  }

  getUserProfile() {

    interface IUser {
      public_repos: string;
      login: string,
      location: any,
      avatar_url: any,
      public_repo: string,
      followers: string,
      following: string,
      email: string,
      created_at: any,
      html_url: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<IUser>(environment.apiUrl)
        .toPromise()
        .then(data => {
          this.user.avatar_url = data.avatar_url
          this.user.created_at = data.created_at
          this.user.email = data.email
          this.user.followers = data.followers
          this.user.following = data.following
          this.user.location = data.location
          this.user.login = data.login
          this.user.public_repos = data.public_repos
          this.user.html_url = data.html_url

          resolve()
        },
          error => {

            reject(error)
          }
        )
    })
    return promise;
  }

  getUserRepo() {

  }
}
