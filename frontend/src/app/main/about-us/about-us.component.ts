import { Component } from '@angular/core'
import { IconComponent } from '../../components/icon/icon.component'
import { ParallaxDirective } from '../../shared/directives/parallax.directive'

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [IconComponent, ParallaxDirective],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
