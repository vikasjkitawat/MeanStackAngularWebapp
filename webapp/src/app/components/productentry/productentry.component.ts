import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  newProduct : Product;
  @Output() onProductAdd : EventEmitter<Product>; // Event Payload will be Product type - STEP 1

  constructor() 
  { 
    this.newProduct = new Product();
    this.onProductAdd = new EventEmitter<Product>(); // STEP 2
  }

  ngOnInit() {
  }

  saveProduct()
  {
    console.dir(this.newProduct);
    this.onProductAdd.emit(this.newProduct); //STEP 3 - Raising an Event
    this.newProduct = new Product();
  }
}
