import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],

  // Here even though we have set OnPush, change detection for products list will only 
  // happen when a new object is created
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit {

  // Type declarations
  // Decorators - @Input() => used to tell that we will import from out
  @Input() products: Product[]

  constructor() {
    this.products = [];
  }

  ngOnInit() {
  }

}
