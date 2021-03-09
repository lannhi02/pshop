import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pShop';
  products: IProduct[];

  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products?pageSize=20").subscribe(
      (response: IPagination) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}
