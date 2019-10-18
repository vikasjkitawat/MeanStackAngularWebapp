import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { VirtualTimeScheduler } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css'],
  //providers: [DataService] // this can be set in Module level as well as in app level (app.module.ts)
})
export class EshopComponent implements OnInit
{

  EShopInventory: Product[];

  constructor(private dataService: DataService) // Dependency Injection 
  {

    console.log('eshop comp : ' + dataService.getServiceId());

    // this.EShopInventory =
    //   [
    //     // mock data
    //     new Product("Mobiles", "Apple", 50000),
    //     new Product("Laptops", "HP", 75000),
    //     new Product("Desktops", "Dell", 25000)
    //   ];

    //OPTION 2: 
    //this.EShopInventory = dataService.getProducts();

    //OPTION 3: USING REST API
    this.EShopInventory = [];
    var promise = dataService.getProducts();

    promise.then(
      (products: Product[]) => // success
      {
        this.EShopInventory = products;
      },
      (errorMessage: string) => // error
      {
        alert(errorMessage);
      }
    )
  }

  ngOnInit()
  {
  }

  addProduct(newProduct: Product)
  {
    // this.EShopInventory.push(newProduct);

    // Create a copy of EShopInventory with the new product added
    // var newArray = [];
    // this.EShopInventory = newArray.concat(this.EShopInventory, newProduct);

    // Doing this to change the memory ref which EShopInventory points to
    // Concept of Immutables implemented using ES6 spread operator
    // this.EShopInventory =
    //   [
    //     ...this.EShopInventory,
    //     newProduct
    //   ];

    //this.dataService.addProducts(newProduct);
    //this.EShopInventory = this.dataService.getProducts();
    //this.EShopInventory=[...this.EShopInventory];

    var promise = this.dataService.addProducts(newProduct);

    promise.then(
      (updatedProductList: Product[]) => //success
      {
        this.EShopInventory = updatedProductList;
      },
      (errorMessage: string) => //error
      {
        alert(errorMessage);
      }
    )
  }
}
