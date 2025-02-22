import { Directive, ElementRef, inject, Input } from '@angular/core'
import { ParallaxService } from '../services/parallax.service'

@Directive({
  selector: '[parallax]',
  standalone: true,
})
export class ParallaxDirective {
  private service = inject(ParallaxService)

  @Input('parallax') factor: number = 1
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.service.observe(this.el.nativeElement, this.factor)
  }
}
