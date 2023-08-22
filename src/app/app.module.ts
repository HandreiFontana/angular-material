import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AngularMaterialModule } from './shared/angular-material/angular-material.module'

import { AppComponent } from './app.component'
import { DefaultComponent } from './_layouts/default/default.component'

import { HomeComponent } from './pages/authentication/home/home.component'
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component'
import { SideDrawerComponent } from './_layouts/default/components/app-side-drawer/app-side-drawer.component';
import { AppToolbarComponent } from './_layouts/default/components/app-toolbar/app-toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    DefaultComponent,
    SideDrawerComponent,
    AppToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
