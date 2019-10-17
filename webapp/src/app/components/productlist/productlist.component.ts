import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
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
