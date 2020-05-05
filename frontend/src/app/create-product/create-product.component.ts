import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsApiService } from '../products-api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
product:Product = new Product();

  constructor(private api:ProductsApiService,private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    this.api.createProduct(this.product).subscribe();
    this.product = new Product();
    this.redirect();
  }
  redirect(){
    this.router.navigate(['/products']);
  }
}
