import { Component, OnDestroy } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { ISignInDto, SignInTypes } from 'src/app/interfaces/authentication/i-sign-in-dto'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'

@Component({
  selector: 'sign-in-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  private subscriptions = new Subscription

  public signInForm = this.formBuilder.group({
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    password: this.formBuilder.control(null, [Validators.required])
  })

  constructor (private formBuilder: FormBuilder, private authentication: AuthenticationService, private router: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  public verifyIfInvalid = (field: SignInTypes) => {
    const formField = this.signInForm.controls[field] 
    return formField.invalid && (formField.dirty || formField.touched)
  }
  
  public onSubmit = () => {
    const { email, password } = this.signInForm.value

    const payLoad: ISignInDto = {
      email: email!,
      password: password!
    }

    this.subscriptions.add(
      this.authentication
        .signIn(payLoad)
        .subscribe(() => this.router.navigate(['home']))
    )
  }
}
