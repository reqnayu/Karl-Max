import { Component, ElementRef, Host, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { Directory } from '../../../../types'
import { SocialMediaComponent } from '../../shared/components/social-media/social-media.component'
import { ParallaxDirective } from '../../shared/directives/parallax.directive'
import { ParallaxService } from '../../shared/services/parallax.service'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialMediaComponent, ParallaxDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private parallax = inject(ParallaxService)

  constructor(private el: ElementRef) {
    this.parallax.navBar = el
  }

  protected directories: Directory[] = [
    { displayName: 'Start', path: '/start' },
    { displayName: 'Die Band', path: '/die-band' },
    { displayName: 'Kontakt', path: '/kontakt' },
    { displayName: 'Diskografie', path: '/diskografie' },
  ]
}
