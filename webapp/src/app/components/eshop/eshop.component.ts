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
    this.EShopInventory.push(newProduct);
  }
}
