import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { environment } from 'src/app/environments/environment';
import { Room } from './rooms.entities';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  url: string;
  httpOptions: {}

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.url = `${environment.apiUrl}tipohabitaciones`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }),
      responseType: 'json',
      withCredentials: true
    };
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url, this.httpOptions);
  }
}
