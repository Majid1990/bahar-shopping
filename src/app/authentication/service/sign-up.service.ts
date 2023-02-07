import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../model/sign-up.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  users: SignUp[] = [];

  newSignUp(eve: SignUp) {
    this.users.push(eve);
  }
  postNewSignUp(data: SignUp) {
    this.http
      .post(
        'https://bahar-shopping-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        data
      )
      .subscribe();
  }
}
