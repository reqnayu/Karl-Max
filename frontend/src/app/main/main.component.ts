import { Component } from '@angular/core'
import { NavComponent } from './nav/nav.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { FooterComponent } from './footer/footer.component'
import { DiscographyComponent } from './discography/discography.component'
import { LandingComponent } from './landing/landing.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, AboutUsComponent, FooterComponent, DiscographyComponent, LandingComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
