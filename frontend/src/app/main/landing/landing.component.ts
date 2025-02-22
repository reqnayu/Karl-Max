import { Component } from '@angular/core'
import { ParallaxDirective } from '../../shared/directives/parallax.directive'
import { IconComponent } from '../../components/icon/icon.component'

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ParallaxDirective, IconComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
