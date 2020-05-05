import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsApiService } from '../products-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products:Observable<Product[]>;
  product:Product = new Product();
  constructor( private api:ProductsApiService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  updateEditId(editId:string){
    this.api.updateData(editId);
    this.router.navigate(['/edit-product']);
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
  deleteProducts(id:string){
    this.api.deleteProductsById(id).subscribe();
    this.product = new Product();
    window.location.reload();
  }
  addToCart(product: any){
    this.api.addToCart(product);
    window.alert('produk anda berhasil ditambahkan ke dalam cart');
  }
}
