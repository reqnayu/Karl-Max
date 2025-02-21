import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { HomeComponent } from './main/home/home.component'
import { AboutUsComponent } from './main/about-us/about-us.component'
import { ContactComponent } from './main/contact/contact.component'
import { ArchiveComponent } from './main/archive/archive.component'

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'start', component: HomeComponent },
      { path: 'die-band', component: AboutUsComponent },
      // { path: 'kontakt', component: ContactComponent },
      // { path: 'archiv', component: ArchiveComponent },
    ],
  },
  {
    path: ':section',
    redirectTo: '',
    pathMatch: 'full',
  },
]
