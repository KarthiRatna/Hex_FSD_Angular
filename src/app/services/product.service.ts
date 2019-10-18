import { Injectable } from '@angular/core';
import { Category, Product } from '../models';
import {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  //this service will automatically injected in the root compopnent
  providedIn: 'root'
})
/* export class ProductService {
  categories:Category[]=[
    {id:101, name:"Mobiles", description:"SmartPhones and featured phones"},
    {id:102, name:"Televisions", description:"SmartTV and Normal Tv"},
    {id:103, name:"Laptops", description:"Top Brand laptops and notebooks"},
    {id:104, name:"Appliances", description:"Home and kichten appliances"}
  ];

  products:Product[]=[
    {id:1, name:"Mi 7",brand:"Xiaomi",categoryId:101,price:21000,quantity:15,taxRate:20,manufacturingDate:new Date(2019,1,15),reorderLevel:5,imageUrl:"./assets/mi7.jpg"},
    {id:2, name:"Redmi Note 2",brand:"Xiaomi",categoryId:101,price:17000,quantity:6,taxRate:8,manufacturingDate:new Date(2019,8,16),reorderLevel:8,imageUrl:"./assets/Redmi.jpg"},
    {id:3, name:"Envy 13",brand:"HP",categoryId:101,price:72000,quantity:10,taxRate:8,manufacturingDate:new Date(2019,6,16),reorderLevel:3,imageUrl:"./assets/envy.jpg"},

    {id:4, name:"Dell inspiron",brand:"Dell",categoryId:103,price:172000,quantity:10,taxRate:7,manufacturingDate:new Date(2019,8,16),reorderLevel:7,imageUrl:"./assets/Dell_Inspiron.jpg"},
    {id:5, name:"mac Air Pro",brand:"Apple",categoryId:103,price:272000,quantity:9,taxRate:20,manufacturingDate:new Date(2019,9,19),reorderLevel:5,imageUrl:"./assets/macair.jpg"},
    {id:6, name:"Lenovo Yoga",brand:"Lenovo",categoryId:103,price:72000,quantity:2,taxRate:6,manufacturingDate:new Date(2019,10,20),reorderLevel:4,imageUrl:"./assets/yoga.jpg"},

    {id:7, name:"LG 34 inch TV",brand:"LG",categoryId:102,price:12000,quantity:5,taxRate:20,manufacturingDate:new Date(2019,8,21),reorderLevel:5,imageUrl:""},
    {id:8, name:"MI TV",brand:"Xiaomi",categoryId:102,price:62000,quantity:3,taxRate:11,manufacturingDate:new Date(2019,6,22),reorderLevel:6,imageUrl:"./assets/mitv.jpg"},
    {id:9, name:"Samsung LED TV",brand:"Samsung",categoryId:102,price:22000,quantity:0,taxRate:10,manufacturingDate:new Date(2019,4,23),reorderLevel:10,imageUrl:"./assets/samsung.jpg"}
  ];

  constructor() { }

  getProducts():Observable<Product[]>{
    return of(this.products);
  }

  getProductById(id:number):Observable<Product>{
    let item = this.products.find(s=>s.id==id);
    return of(item);
  }

  addProduct(product:Product):Observable<Product>{
    //we need a form view to create a product from user
    let lastId= this.products[this.products.length-1].id;
    product.id=lastId+1;
    this.products.push(product);
    return of(product);
  }
  removeProduct(id:number):Observable<any>{
    let itemindex= this.products.findIndex(s=> s.id==id);
    this.products.splice(itemindex,1);
    return undefined;
  }

  getCategories():Observable<Category[]>{
    return of(this.categories);
  }
} */
export class ProductService {

  readonly API_URL="http://localhost:3000";
 

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.API_URL}/products/${id}`);
  }

  addProduct(product:Product):Observable<Product>{
    //we need a form view to create a product from user
    return this.http.post<Product>(`${this.API_URL}/products`,product);
  }
  removeProduct(id:number):Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/products/${id}`);
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.API_URL}/categories`)
  }
}
