import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = "http://localhost:3000/users";

  userSubject: BehaviorSubject<any>;
  currentUser:Observable<any>;

  constructor(private http: HttpClient) {
//if the user successfully login , his details will be there until he log out.other component is also subscribed to it
this.userSubject= new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
// to notify all the user regarding the login
this.currentUser=this.userSubject.asObservable();
}

  /*********************without using Http Interceptor**************** */

  /*            addUser(user: User): Observable<User> {
                let options = {
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }

                };
                return this.http.post<User>(this.API_URL, user, options); */

 /*********************using Http Interceptor**************** */

                addUser(user: User): Observable<User> {
                  return this.http.post<User>(this.API_URL, user);
  }


  getUser(username:string,password:string):Observable<any>{
    let url=`${this.API_URL}?username:${username}&password=${password}`;
    return this.http.get<any>(url);
  }

  saveUserState(user)
  {
    delete user.password;
    localStorage.setItem("user",JSON.stringify(user));
    //send user notification to all users
    this.userSubject.next(user);
  }

  removeUserState(){
    localStorage.clear();
    this.userSubject.next(null);
  }

  public LoggedInUser():any{
    return this.userSubject.value;
  }
}
