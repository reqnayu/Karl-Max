import { Component } from '@angular/core'
import { ParallaxDirective } from '../../shared/directives/parallax.directive'

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ParallaxDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
