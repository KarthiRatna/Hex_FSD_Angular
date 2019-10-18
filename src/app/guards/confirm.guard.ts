import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services';
import { AddProductComponent } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<AddProductComponent> {

  canDeactivate(component: AddProductComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> {
      if(!component.navigationEnabled){
      let z=confirm("Are you sure you want to close the window?");
      return z;
      }
      else{
        return true;
      }
  }
}
  

