import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string;
  userToken!: any;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'auth/authenticate';
  }

  logIn(userCredentials: any): void {
    this.http.post(this.url, userCredentials).subscribe({
      next: (user: any) => {
        console.log(user);
        this.userToken = user.token;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
