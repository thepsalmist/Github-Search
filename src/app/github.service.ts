import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '')
  }

  getUserProfile() {

    interface IUser {
      login: string,
      location: any,
      avatar_url: any,
      public_repo: string,
      followers: string,
      following: string,
      email: string,
      created_at: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<IUser>(environment.apiUrl)
    })
  }

}
