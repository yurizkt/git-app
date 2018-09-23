import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { TokenService } from '../token/token.service'
// import * as auth0 from 'auth0-js'

const API_URL = "https://api.github.com/"

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer '  
  //   })
  // }

  authenticate(username: string, password: string) {
    return this.http
      .post<any>(API_URL, { username, password }, {observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token')
        this.tokenService.setToken(authToken)
        console.log( authToken )    
      }))
  }

}
