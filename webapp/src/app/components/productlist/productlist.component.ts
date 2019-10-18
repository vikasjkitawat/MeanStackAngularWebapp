import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],

  // Here even though we have set OnPush, change detection for products list will only 
  // happen when a new object is created
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit
{

  // Type declarations
  // Decorators - @Input() => used to tell that we will import from out
  // @Input() products: Product[]
  products: Product[]

  constructor(private _dataService: DataService, private _changeDetector : ChangeDetectorRef)
  {
    var promise = this._dataService.getProducts();
    promise.then(
      (prod: Product[]) => // success
      {
        this.products = prod;
        _changeDetector.detectChanges();
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

}
