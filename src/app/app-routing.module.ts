import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DefaultComponent } from './_layouts/default/default.component'
import { HomeComponent } from './pages/authentication/home/home.component'
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component'

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      }
    ]
  },
  {
    path: "login",
    component: SignInComponent,
  },

  { path: "**", redirectTo: "/sign-in" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
