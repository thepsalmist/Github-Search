import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/thepsalmist').subscribe(data => {
      this.user = data
      console.log(data);
      console.log('working here!')
    })

  }

}
