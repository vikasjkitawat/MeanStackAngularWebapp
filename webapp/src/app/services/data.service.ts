import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService
{

    ProductInventory: Product[];
    ProductsEndpoint: string;

    constructor(private httpClient: HttpClient) 
    {
        this.ProductsEndpoint = "http://localhost:5000/products"

        this.ProductInventory = [];
        this.ProductInventory.push(new Product("Mobiles", "Apple", 50000));
        this.ProductInventory.push(new Product("Laptops", "HP", 75000));
        this.ProductInventory.push(new Product("Desktops", "Dell", 25000));
    }

    getProducts()
    {
        // return this.ProductInventory;

        var promise = new Promise(
            (resolve, reject) => // ON THEN function
            {
                var observable = this.httpClient.get(this.ProductsEndpoint);
                observable.subscribe(
                    (data: Product[]) => // NEXT (similar to Try)
                    {
                        console.dir('service called');
                        this.ProductInventory = data;
                        console.dir(this.ProductInventory);
                        var result =
                            [
                                ...this.ProductInventory
                            ];
                        resolve(result);
                    },
                    (error) => // Error (similar to Catch)
                    {
                        console.dir(error);
                        reject("Operation Failed");
                    },
                    () => // Complete (similar to Finally)
                    {
                        // Not Relevant to us
                    }
                );
            }
        );

        return promise;
    }

    addProducts(newProduct: Product)
    {
        //OPTION 1:
        // this.ProductInventory.push(newProduct);
        // return 
        // [
        //     ...this.ProductInventory
        // ];

        //OPTION 2:
        // this.ProductInventory =
        //     [
        //         ...this.ProductInventory,
        //         newProduct
        //     ];

        //OPTION 3: USING API
        //var observable = this.httpClient.get(this.ProductsEndpoint);

        return new Promise(
            (resolve, reject) => // ON THEN function
            {
                var requestHeaders = new HttpHeaders();
                requestHeaders.append("Content-Type", "application/json");

                var observable = this.httpClient.post(
                    this.ProductsEndpoint, //URL
                    newProduct,  // Posted data
                    {
                        headers: requestHeaders
                    });

                observable.subscribe(
                    (data: Product) => // NEXT (similar to Try) - Success
                    {
                        this.ProductInventory.push(data);
                        var result = [
                            ...this.ProductInventory
                        ];
                        resolve(result);
                    },
                    (error) => // Error (similar to Catch)
                    {
                        console.dir(error);
                        reject("Failed to save the product");
                    },
                    () => // Complete (similar to Finally)
                    {
                        // Not Relevant to us
                    }
                );
            }
        );

    }
}