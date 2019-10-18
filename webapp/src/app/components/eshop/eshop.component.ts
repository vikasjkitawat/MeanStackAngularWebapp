import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent implements OnInit {

  EShopInventory : Product[];

  constructor() {
    this.EShopInventory =
      [
        // mock data
        new Product("Mobiles", "Apple", 50000),
        new Product("Laptops", "HP", 75000),
        new Product("Desktops", "Dell", 25000)
      ];
  }

  ngOnInit() {
  }

  addProduct(newProduct : Product)
  {
    // this.EShopInventory.push(newProduct);

    // Create a copy of EShopInventory with the new product added
    // var newArray = [];
    // this.EShopInventory = newArray.concat(this.EShopInventory, newProduct);

    // Doing this to change the memory ref which EShopInventory points to
    // Concept of Immutables implemented using ES6 spread operator
    this.EShopInventory =
    [
      ...this.EShopInventory,
      newProduct
    ]

    // var newProduct =
    // [
    //   ...this.EShopInventory,
    //   city : ""
    // ]
    // newProduct["city"] = 
  
  }
}
