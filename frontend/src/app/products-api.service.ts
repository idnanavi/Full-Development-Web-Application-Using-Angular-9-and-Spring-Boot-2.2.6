import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private content = new BehaviorSubject<string>("");
  public share = this.content.asObservable();
  private url = 'http://localhost:7070/products';
  carts = [];
  index;
  constructor(private http:HttpClient) { }
  updateData(editId){
    this.content.next(editId);
  }
  getProductsList(): Observable<any>{
    return this.http.get('http://localhost:7070/products/all-products');
  }
  getProductsByType(type : String):Observable<any>{
    return this.http.get('http://localhost:7070/products/all-products/'+type);
  }
  deleteProductsById(id : String):Observable<any>{
    return this.http.delete('http://localhost:7070/products/delete-products/'+id);
  }
  editProductsById(id :String,product : Object):Observable<Object>{
    return this.http.put('http://localhost:7070/products/edit-product/'+id,product);
  }
  createProduct(product:Object):Observable<Object>{
    return this.http.post('http://localhost:7070/products/create-product/',product);
  }
  addToCart(product){
    this.carts.push(product);
  }
  deleteProduct(id){
    this.index = this.carts.findIndex(x => x.id === id);
    this.carts.splice(this.index,1);
  }
  getCarts(){
    return this.carts;
  }
  clearCart(){
    this.carts = [];
    return this.carts;
  }
  addToDb(item:Object):Observable<Object>{
    console.log(item);
    return this.http.post('http://localhost:7070/order/create-order',item);
  }
}
