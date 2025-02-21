import { Component } from '@angular/core'
import discographyData from '../../../../public/data/discography.json'
import { DiscographyItem } from '../../shared/models/discography-item.class'
import { IconComponent } from '../../components/icon/icon.component'
import { LinkDirective } from '../../shared/directives/link.directive'

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [IconComponent, LinkDirective],
  templateUrl: './discography.component.html',
  styleUrl: './discography.component.scss',
})
export class DiscographyComponent {
  protected discographyItems = (discographyData as any[]).map((d) => new DiscographyItem(d))

  constructor() {}
}
