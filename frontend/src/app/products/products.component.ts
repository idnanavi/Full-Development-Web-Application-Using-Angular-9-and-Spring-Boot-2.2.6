import { Component, OnInit, Input } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Router } from '@angular/router';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
products:Observable<Product[]>;
product:Product = new Product();
content: string;
  constructor( private api:ProductsApiService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  
  reloadData(){
    this.products = this.api.getProductsList();
  }
  getGraduation(){
    this.products = this.api.getProductsByType("graduation");
  }
  getWedding(){
    this.products = this.api.getProductsByType("wedding");
  }
  getBirthday(){
    this.products = this.api.getProductsByType("birthday");
  }
  getEvent(){
    this.products = this.api.getProductsByType("event");
  }
  addToCart(product: any){
   this.api.addToCart(product);
   window.alert('produk anda berhasil ditambahkan ke dalam cart');
 }

}
