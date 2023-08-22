import { Component, ViewChild } from '@angular/core'
import { MatDrawer } from '@angular/material/sidenav'
import { Router } from '@angular/router'

interface ISideDrawerItemDTO {
  label: string
  route: string
  icon: string
}

@Component({
  selector: 'app-side-drawer',
  templateUrl: './app-side-drawer.component.html',
  styleUrls: ['./app-side-drawer.component.scss']
})
export class SideDrawerComponent {
  @ViewChild(MatDrawer, { static: true }) drawer?: MatDrawer

  public isExpanded?: boolean

  constructor(
    public router: Router
  ) { }

  public sideDrawerItems: ISideDrawerItemDTO[] = [
    {
      "label": "Home",
      "route": "/home",
      "icon": "home"
    },
    {
      "label": "Home",
      "route": "/home",
      "icon": "home"
    },
    {
      "label": "Home",
      "route": "/home",
      "icon": "home"
    },
    {
      "label": "Home",
      "route": "/home",
      "icon": "home"
    },
  ]

  public toggleSideDrawer() {
    this.drawer?.toggle()
  }
}
