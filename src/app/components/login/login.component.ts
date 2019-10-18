import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { Login } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit 
{
  loginform:FormGroup; 
 constructor(private fb:FormBuilder, private userSvc:UserService, private router:Router){
    
  this.loginform=this.fb.group({
      username:new FormControl("",Validators.required),
      password: new FormControl("",Validators.compose([Validators.required,, Validators.minLength(8)]))
    })
  }


  ngOnInit() {
  }

  public get Username(){
    return this.loginform.controls["username"];
  }
  public get Password(){
    return this.loginform.controls["password"];
  }

  login(){
    if(this.loginform.valid)
    {
      let username= this.loginform.value.username;
      let password= this.loginform.value.password;
      this.userSvc.getUser(username,password)
      .subscribe(
        result=>{
          if(result.length>0){
            this.userSvc.saveUserState(result[0]);
            this.router.navigate(['/']);
          }
          else
          {
            alert("User not exist with the given username/password");
          }
        },
        err=>{alert("Error in registering the user");}
      )
      //save data
    }
    else{
      alert("Invalid UserName/Password");
    }
  }

}
