'use strict'
import { Product } from "./Product";
import {ProductService} from "./ProductService";
let _productServie = new ProductService();

let result;
let newProduct = new Product();
newProduct.id = 5;
newProduct.name = "Samsung S9";
newProduct.category = "Telefon";
newProduct.price = 5000;
_productServie.saveProduct(newProduct);
result = _productServie.getProducts();
console.log(result)