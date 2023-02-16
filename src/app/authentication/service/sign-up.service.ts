import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { SignUp } from '../model/sign-up.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  users: SignUp[] = [];
  data: any = [];
  user?: any;

  newSignUp(eve: SignUp) {
    this.users.push(eve);
  }
  postNewSignUp(data?: SignUp) {
    this.http
      .post(
        'https://bahar-shopping-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        data
      )
      .subscribe();
  }
  findCustomer(email: string, password: string) {
    return this.http.get(
      'https://bahar-shopping-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
  profile(userName?: string, password?: string) {
    debugger;
    this.user = { userName, password };
    // this.user = this.users.find(
    //   (x) => x.email === userName && x.password === password
    // );
  }
}
