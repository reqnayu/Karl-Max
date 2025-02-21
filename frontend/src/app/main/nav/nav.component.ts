import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IconComponent } from '../../components/icon/icon.component'
import { Directory, Icon, Route } from '../../../../types'
import { LinkDirective } from '../../shared/directives/link.directive'
import { SocialMediaComponent } from '../../shared/components/social-media/social-media.component'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent, LinkDirective, SocialMediaComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  protected directories: Directory[] = [
    { displayName: 'Start', path: '/start' },
    { displayName: 'Die Band', path: '/die-band' },
    { displayName: 'Kontakt', path: '/kontakt' },
    { displayName: 'Archiv', path: '/archiv' },
  ]
}
