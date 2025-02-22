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
    this.el.nativeElement.style.setProperty('--top', this.el.nativeElement.getBoundingClientRect().top.toString())
    this.service.observe(this.el.nativeElement, this.factor)
  }
}
