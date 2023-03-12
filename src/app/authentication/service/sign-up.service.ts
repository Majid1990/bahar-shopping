import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../model/sign-up.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  users: any[] = [];
  data: any = [];
  user?: SignUp;

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

  editClientInfo(id: any, value?: SignUp) {
    return this.http.put(
      'https://bahar-shopping-default-rtdb.europe-west1.firebasedatabase.app/posts/' +
        id +
        '.json',
      value
    );
  }

  findCustomer() {
    return this.http.get(
      'https://bahar-shopping-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
  profile(userName: string, password: string) {
    this.user = { email: userName, password: password };
    this.findCustomer().subscribe((obj) => {
      let property: keyof typeof obj;
      for (property in obj) {
        const user = obj[property];
        this.users.push(user);
      }
    });
  }
}
