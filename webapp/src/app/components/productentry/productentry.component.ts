import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit
{
  newProduct: Product;

  constructor(private _dataService: DataService, private _routerService: Router) 
  {
    this.newProduct = new Product();
  }

  ngOnInit()
  {
  }

  saveProduct()
  {
    console.dir(this.newProduct);

    var promise = this._dataService.addProducts(this.newProduct);
    promise.then(
      (prod: Product) => // success
      {
        console.dir(prod);
        console.log('new prod id ' + prod.id);
        this._routerService.navigate([
          "eshop",
          "list"
        ]);

      },
      (errorMessage: string) => // error
      {
        alert(errorMessage);
      }
    );
    this.newProduct = new Product();

  }
}
