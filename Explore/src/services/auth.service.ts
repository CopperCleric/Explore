import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.auth; 
  constructor(
    private http : HttpClient
  ) { }

  loginWithGoogle(credentials : string) : Observable<any>{

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(this.path + "Login" , JSON.stringify(credentials), { headers : header});
  }
}
