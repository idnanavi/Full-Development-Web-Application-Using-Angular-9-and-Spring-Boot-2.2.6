import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {Router} from '@angular/router';
import { ProductsApiService } from '../products-api.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:Product = new Product();
 editId;
  constructor(private api:ProductsApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.share.subscribe(data => this.editId = data);
  }
  save(){
    this.api.editProductsById( this.editId,this.product).subscribe();
    this.product = new Product();
    this.redirect();
  }
  redirect(){
    this.router.navigate(['/products']);
  }

}
