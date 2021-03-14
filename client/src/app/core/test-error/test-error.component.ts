import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe(reponse => {
      console.log(reponse);
    }, error => {
      console.log(error);
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(reponse => {
      console.log(reponse);
    }, error => {
      console.log(error);
    })
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(reponse => {
      console.log(reponse);
    }, error => {
      console.log(error);
    })
  }

  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/fifty').subscribe(reponse => {
      console.log(reponse);
    }, error => {
      console.log(error);
    })
  }

}