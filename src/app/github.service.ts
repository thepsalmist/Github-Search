import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IRepo } from './repos';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user: User;
  repos: any

  private _url: string = 'https://api.github.com/users/thepsalmist/repos'
  username: string;

  constructor(private http: HttpClient) {
    this.user = new User(1, '', '', '', '', '', '', '', '')
  }

  getUserProfile() {

    interface IUser {
      public_repos: number;
      login: string,
      location: any,
      avatar_url: any,
      followers: string,
      following: string,
      email: string,
      created_at: any,
      html_url: any
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<IUser>("https://api.github.com/users/thepsalmist?access_token=" + "08cde142ae5594b2de84ebb863a8a9fba96d4a7a")
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

  getUserRepo(): Observable<IRepo[]> {
    return this.http.get<IRepo[]>(this._url)
  }
  newProfile(username: string) {
    this.username = username;
  }

}
