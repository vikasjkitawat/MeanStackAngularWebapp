import { BaseModel } from './basemodel';

export class Product extends BaseModel
{
    // Type declarations
    Name : string;
    Brand : string;
    Price : number;
    _id : number|string;

    constructor(
        name : string = "",
        brand : string = "",
        price : number = 0,
        _id : number|string = 0)
    {
        super(); // Call base constructor first
        this.Name = name;
        this.Brand = brand;
        this.Price = price;
        this._id = _id;
    }
}

// var p1 = new Product("mobile", "apple", 50000)