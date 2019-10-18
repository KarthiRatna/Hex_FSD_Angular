import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userform:FormGroup;
  
  constructor(private fb:FormBuilder, private userSvc:UserService){
    this.userform=this.fb.group({
      username:new FormControl("",Validators.required),
      password: new FormControl("",Validators.compose([Validators.required,, Validators.minLength(8)])), 
      fullname:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([Validators.required, Validators.email])),
      mobile:new FormControl("",Validators.compose([Validators.required, Validators.maxLength(10)]))
    })
  }

  ngOnInit() {
  }
//create properties for every control to get the direct access
  public get Username(){
    return this.userform.controls["username"];
  }
  public get Password(){
    return this.userform.controls["password"];
  }
  public get Fullname(){
    return this.userform.controls["fullname"];
  }
  public get Email(){
    return this.userform.controls["email"];
  }
  public get Mobile(){
    return this.userform.controls["mobile"];
  }

  register()
  {
    if(this.userform.valid)
    {
      let  user:User= this.userform.value;
      this.userSvc.addUser(user)
      .subscribe(
        result=>{
          console.log(result);
          alert("Registered Successfully");
        },
        err=>{alert("Error in registering the user");}
      )
      //save data
    }
    else{
      alert("Invalid Data");
    }
  }

}
