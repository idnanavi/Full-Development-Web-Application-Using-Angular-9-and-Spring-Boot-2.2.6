import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
total =0;
show = true;
index;

  constructor(private api:ProductsApiService) { }

  ngOnInit() {
    this.items =  this.api.getCarts();
    this.getCheck();
    this.getTotal();
  }
  deleteItem(id){
    this.api.deleteProduct(id);
  }
  getTotal(){
    for (let index = 0; index < this.items.length; index++) {
     this.total = this.total + this.items[index].price;
    }
  }
  getCheck(){
    if(this.items.length <= 0){
      this.show = false;
    }
  }
  addToDatabase(){
    this.api.addToDb(this.items).subscribe();
    window.alert('Proses pembelian anda berhasil');
    window.location.reload();
  }
}
