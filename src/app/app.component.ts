import { Component } from '@angular/core';
import { UserService } from './services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: [],
})
export class AppComponent {
  title = 'eshop-spa';
  currentUser:any;

  constructor(private userSvc:UserService, private router:Router){
    this.userSvc.currentUser.subscribe(res=>(this.currentUser=res));
  }

  logout(){
    this.userSvc.removeUserState();
    this.router.navigate(['/login']);
  }
}
