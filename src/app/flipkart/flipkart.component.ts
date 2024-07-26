import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {


  public item: string = "";

  public newproduct = {
    productname:'', price: 0, rating: 0, freedelivery: false
  }

  public products: any[] = [
    { productname: 'pen', price: 20, rating: 4.5, freedelivery: false },
    { productname: 'phone', price: 20000, rating: 4.0, freedelivery: true },
    { productname: 'shirt', price: 600, rating: 4.2, freedelivery: true },
    { productname: 'cap', price: 150, rating: 3.0, freedelivery: true },
    { productname: 'mobile case', price: 3050, rating: 4.0, freedelivery: false },
    { productname: 'remote', price: 300, rating: 3.6, freedelivery: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  search(item: string) {
    this.products = this.products.filter(product => product.productname.includes(item));
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }

  bro() {
    this.products = this.products.filter(product => product.freedelivery)
  }
  lh() {
    this.products = this.products.sort((a, b) => a.price - b.price)
  }
  hl() {
    this.products = this.products.sort((a, b) => b.price - a.price)
  }
  rlh() {
    this.products = this.products.sort((a, b) => a.rating - b.rating)
  }
  rhl() {
    this.products = this.products.sort((a, b) => b.rating - a.rating)
  }
  

  add(){
    this.products.push({...this.newproduct});
    this.newproduct={ productname:'', price: 0, rating: 0, freedelivery: false}
  }
  discount(){
    this.products=this.products.map(product=>{
      product.price=product.price/2;
      return product;
    })
  }
  charges(){
    this.products=this.products.filter(product=>product.freedelivery==false);
    let totalprice=this.products.map(product=>{
      product.price=product.price+20;
      return product
  
    })
  }
  total(){
    let totalprice=this.products.reduce((sum,a)=>sum+a.price,0);
    alert("total amount"+ totalprice);
  }
  cart(){
    let length=this.products.length;
    alert(length+"items are in cart");
  }
  // add(){
  //   this.products.push({...this.newproduct})
  //   this.newproduct={productname:'',price:0, rating:0, freedelivery:false};
  // }
  
  

   

}
