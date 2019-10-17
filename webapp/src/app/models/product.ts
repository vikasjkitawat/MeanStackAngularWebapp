import { BaseModel } from './basemodel';

export class Product extends BaseModel
{
    // Type declarations
    Name : string;
    Brand : string;
    Price : number;

    constructor(
        name : string = "",
        brand : string = "",
        price : number = 0)
    {
        super(); // Call base constructor first
        this.Name = name;
        this.Brand = brand;
        this.Price = price;
    }
}

// var p1 = new Product("mobile", "apple", 50000)