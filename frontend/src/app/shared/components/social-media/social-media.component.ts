import { Component } from '@angular/core'
import { Icon } from '../../../../../types'
import { LinkDirective } from '../../directives/link.directive'
import { IconComponent } from '../../../components/icon/icon.component'

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [LinkDirective, IconComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  protected socialMediaButtons: { name: Icon; url: string }[] = [
    { name: 'youtube', url: 'https://www.youtube.com/@karlmax1312' },
    { name: 'instagram', url: 'https://www.instagram.com/karlmax_official/' },
    { name: 'spotify', url: 'https://https://open.spotify.com/artist/7bkK44mWyovYrytgPEOMmB/discography' },
  ]
}
