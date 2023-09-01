import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ISignInDto } from 'src/app/interfaces/authentication/i-sign-in-dto'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  public signIn = ({ email, password }: ISignInDto) => {
    return this.httpClient
      .post(`${environment.baseUrl}/sessions`, { email, password })
  }
}
