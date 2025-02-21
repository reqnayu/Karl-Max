import { Component, Input } from '@angular/core'
import { Icon } from '../../../../types'

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() name!: Icon
}
