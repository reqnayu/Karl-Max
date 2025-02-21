import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavComponent } from './nav/nav.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { FooterComponent } from './footer/footer.component'
import { DiscographyComponent } from './discography/discography.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NavComponent, AboutUsComponent, FooterComponent, DiscographyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
