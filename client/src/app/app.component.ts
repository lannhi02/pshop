import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pShop';
  products: any[];

  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products?pageSize=20").subscribe((response: any) => {
      console.log(response);
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}
