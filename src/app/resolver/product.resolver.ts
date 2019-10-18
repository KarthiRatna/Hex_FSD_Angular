import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../models';
import { Observable } from 'rxjs';
import { ProductService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product>{
  constructor(private productSvc:ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {

    let id= route.params["id"];
    return this.productSvc.getProductById(id);
  
  }

 
}
